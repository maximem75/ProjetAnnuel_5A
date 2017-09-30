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
        var classObject = "book_room_object";
        var container = document.getElementById("room_container");
        container.style.display = "block";
        container.innerHTML = "";

        var headers = ["Ref", "Arrivée", "Départ", "Chambre", "Catégorie", "Prix"];

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

            Core.controller.clientListBook.createBodyTemplate(body, container, classObject);
        }
    };

    Core.controller.clientListBook.initListRestaurant = function (listRestaurant) {
        var classObject = "book_restaurant_object";
        var container = document.getElementById("room_restaurant");
        container.style.display = "none";
        container.innerHTML = "";

        var headers = ["Date", "Places"];

        Core.controller.clientListBook.createHeadTemplate(headers, container);

        var minute = function (min) {
            if (min < 10)
                return "0" + min;
            else
                return min;
        };

        var hour = function (hour) {
            if (hour < 10)
                return "0" + hour;
            else
                return hour;
        };

        var day = function (day) {
            if (day < 10)
                return "0" + day;
            else
                return day;
        };

        var month = function (month) {
            month += 1;
            if (month < 10)
                return "0" + month;
            else
                return month;
        };

        for (var i = 0; i < listRestaurant.length; i++) {
            var current = listRestaurant[i];
            var date = new Date(current.date);

            var dateString = day(date.getDate()) + "/" + month(date.getMonth()) + "/" + date.getFullYear() + " " + hour(date.getHours()) + ":" + minute(date.getMinutes());

            var body = [dateString, current.number];
            Core.controller.clientListBook.createBodyTemplate(body, container, classObject, "R_" + listRestaurant[i].id);
        }

        var arrayBook = document.getElementsByClassName("book_restaurant_object");

        for (var j = 0; j < arrayBook.length; j++) {
            utils.addListener(arrayBook[j], "mouseenter", function (e) {
                var span = document.createElement("span");
                span.className = "glyphicon glyphicon-remove";
                span.refID = e.target.id.split("_")[1];
                span.id = "btn_remove_restaurantBook";

                e.target.appendChild(span);

                utils.addListener(span, "click", function (e) {
                    Core.service.book.restaurant.cancel(e.target.refID);
                });
            }, false);

            utils.addListener(arrayBook[j], "mouseleave", function () {
                var btn = document.getElementById("btn_remove_restaurantBook");
                btn.parentElement.removeChild(btn);
            }, false);
        }
    };

    Core.controller.clientListBook.initListFestiveRoom = function (listFestiveRoom) {
        var classObject = "book_festiveRoom_object";
        var container = document.getElementById("room_festiveRoom");
        container.style.display = "none";
        container.innerHTML = "";

        var headers = ["Ref", "Début", "Fin", "Prix"];

        Core.controller.clientListBook.createHeadTemplate(headers, container);

        for (var i = 0; i < listFestiveRoom.length; i++) {
            var current = listFestiveRoom[i];
            var dateStart = new Date(current.dateStart);
            var dateEnd = new Date(current.dateEnd);
            var dateStringStart = utils.beautifyDate(dateStart);
            var dateStringEnd = utils.beautifyDate(dateEnd);
            var price = Math.round(data.countryInfo.rate * data.costFestiveRoom * utils.getDays(dateStart.getTime(), dateEnd.getTime()).day) + " " + data.symbol;
            var body = [current.id, dateStringStart, dateStringEnd, price];

            Core.controller.clientListBook.createBodyTemplate(body, container, classObject);
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

    Core.controller.clientListBook.createBodyTemplate = function (list, container, classObject, id) {
        var template = "<div class='book_row " + classObject + "' id='" + id + "'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell'><span class='book_span'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

    Core.controller.clientListBook.cancelBookRestaurant = function () {
        var template = "<div class='book_row " + classObject + "'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell'><span class='book_span'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

})();