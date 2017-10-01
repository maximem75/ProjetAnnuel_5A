/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.admin = Core.controller.admin || {};

    /**
     * Init and display all the datas into the admin panel
     */
    Core.controller.admin.initView = function () {
        service.admin.getListClient();
        service.admin.getListRoomBook();
        service.admin.getListRestaurantBook();
        service.admin.getListFestiveRoomBook();
        service.admin.getListRoom();
        service.admin.getListRestaurantTable();
        service.admin.getListFestiveRoom();
        service.admin.getListBuildings();
        service.admin.getListArticles();
        service.admin.getListGalery();
    };

    Core.controller.admin.displayListClient = function (list) {
        console.log(list);

        var container = document.getElementById("client_container");
        var classObject = "";

        var headers = [
            "Nom", "Prénom", "Téléphone", "Email", "Adresse", "Code Postal", "Pays"
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var client = list[i];
            var id = "";
            body[i] = [client.lastName, client.firstName, client.phone, client.email, client.address, client.postalCode, client.country];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }

    };

    Core.controller.admin.displayListBookRoom = function (list) {
        console.log(list);

        var container = document.getElementById("book_room_container");
        var classObject = "";

        var headers = [
            ""
        ];
        

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListBookRestaurant = function (list) {
        console.log(list);

        var container = document.getElementById("book_restaurant_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListBookFestiveRoom = function (list) {
        console.log(list);
        var container = document.getElementById("book_festiveRoom_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListRoom = function (list) {
        console.log(list);
        var container = document.getElementById("room_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListRestaurantTable = function (list) {
        console.log(list);
        var container = document.getElementById("restaurant_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListFestiveRoom = function (list) {
        console.log(list);
        var container = document.getElementById("festiveRoom_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListBuildings = function (list) {
        console.log(list);
        var container = document.getElementById("building_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListArticles = function (list) {
        console.log(list);
        var container = document.getElementById("article_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displayListGalery = function (list) {
        console.log(list);
        var container = document.getElementById("galery_container");
        var classObject = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(header, container);

        var body = [];

        for(var i = 0 ; i < list.length ; i++){
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    Core.controller.admin.displaySendNewsLetter = function () {
        //Core.service.admin.sendNewsLetter(newsLetter, subject);
    };
    
})();