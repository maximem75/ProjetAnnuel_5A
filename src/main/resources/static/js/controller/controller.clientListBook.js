/**
 * Created by maxime.
 *
 * version 1.0.0
 */

;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.clientListBook = Core.controller.clientListBook || {};

    /**
     * Display all list book for a client
     */
    Core.controller.clientListBook.initView = function () {
        Core.service.book.room.getlistRoomById();
        Core.service.book.restaurant.getByIdClient();
        Core.service.book.festiveRoom.getListBookById();

        var chambre = document.getElementById("room_container");
        var restaurant = document.getElementById("room_restaurant");
        var festiveRoom = document.getElementById("room_festiveRoom");

        var btn_chambre = document.getElementById("btn_room_container");
        var btn_restaurant = document.getElementById("btn_room_restaurant");
        var btn_festiveRoom = document.getElementById("btn_room_festiveRoom");

        utils.addListener(btn_chambre, "click", function () {
            Core.controller.clientListBook.switchView(chambre);
        }, false);

        utils.addListener(btn_restaurant, "click", function () {
            Core.controller.clientListBook.switchView(restaurant);
        }, false);

        utils.addListener(btn_festiveRoom, "click", function () {
            Core.controller.clientListBook.switchView(festiveRoom);
        }, false);
    };

    Core.controller.clientListBook.initListRoom = function (listRoom) {
        var container = document.getElementById("room_container");
        container.style.display = "block";
        container.innerHTML = "";

        var headers = ["Ref", "Date d'arrivée", "Date de départ", "Chambre", "Catégorie", "Prix"];

        Core.controller.clientListBook.createHeadTemplate(headers, container);

        for (var i = 0; i < listRoom.length; i++) {
            var current = listRoom[i];
            var category = utils.getCategoryById(current.idRoomCategory);
            var dateStart = new Date(current.dateStart);
            var dateEnd = new Date(current.dateEnd);
            var dateStringStart = utils.beautifyDate(dateStart);
            var dateStringEnd = utils.beautifyDate(dateEnd);
            var room = Core.utils.getRoomById(current.idRoom);
            var price = Math.round(data.countryInfo.rate * category.price * utils.getDays(dateStart.getTime(), dateEnd.getTime()).day);
            var body = [current.id, dateStringStart, dateStringEnd, room.number, category.name, price];

            Core.controller.clientListBook.createBodyTemplate(body, container);
        }
    };

    Core.controller.clientListBook.initListRestaurant = function (listRestaurant) {
        var container = document.getElementById("room_restaurant");
        container.style.display = "none";
        container.innerHTML = "";

        var headers = ["Date", "Places", "Statut"];

        Core.controller.clientListBook.createHeadTemplate(headers, container);

        for (var i = 0; i < listRestaurant.length; i++) {
            var current = listRestaurant[i];
            var date = new Date(current.date);
            var dateString = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

            var body = [dateString, current.number, current.status];
            Core.controller.clientListBook.createBodyTemplate(body, container);
        }
    };

    Core.controller.clientListBook.initListFestiveRoom = function (listFestiveRoom) {
        var container = document.getElementById("room_festiveRoom");
        container.style.display = "none";
        container.innerHTML = "";

        var headers = ["Ref", "Date d'arrivée", "Date de départ", "Prix"];

        Core.controller.clientListBook.createHeadTemplate(headers, container);

        for (var i = 0; i < listFestiveRoom.length; i++) {
            var current = listFestiveRoom[i];
            var dateStart = new Date(current.dateStart);
            var dateEnd = new Date(current.dateEnd);
            var dateStringStart = utils.beautifyDate(dateStart);
            var dateStringEnd = utils.beautifyDate(dateEnd);
            var price = Math.round(data.countryInfo.rate * data.costFestiveRoom * utils.getDays(dateStart.getTime(), dateEnd.getTime()).day) + " " + data.symbol;
            var body = [current.id, dateStringStart, dateStringEnd, price];

            Core.controller.clientListBook.createBodyTemplate(body, container);
        }

    };

    Core.controller.clientListBook.switchView = function (view) {
        document.getElementById("room_container").style.display = "none";
        document.getElementById("room_restaurant").style.display = "none";
        document.getElementById("room_festiveRoom").style.display = "none";

        view.style.display = "block";
    };

    Core.controller.clientListBook.createHeadTemplate = function (list, container) {
        var template = "<div class='book_row'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell_title'><span class='book_span_title'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

    Core.controller.clientListBook.createBodyTemplate = function (list, container) {
        var template = "<div class='book_row'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell'><span class='book_span'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

})();