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

        Core.controller.admin.displayBookManager();
        Core.controller.admin.displayStructureManager();
        Core.controller.admin.displayContentManager();

    };

    /***********************************************************
     *                          Client                         *
     **********************************************************/
    Core.controller.admin.displayListClient = function (list) {
        var jsonClientSorted = Core.utils.alphabeticSort(list, "lastName");
        var container = document.getElementById("client_container");
        var header_container = document.getElementById("header_list_client");
        var body_container = document.getElementById("body_list_client");
        var classObject = "book_festiveRoom_object";

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "Nom", "Prénom", "Téléphone", "Email", "Adresse", "Code Postal", "Pays"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];
        if (jsonClientSorted.length > 0) {
            for (var i = 0; i < jsonClientSorted.length; i++) {
                var client = list[i];
                var id = "";
                body[i] = [client.lastName, client.firstName, client.phone, client.email, client.address, client.postalCode, client.country];
                Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
            }
        }
    };

    Core.controller.admin.initToolsClient = function () {
        var btnSearch = document.getElementById("btn_list_client_search");
        var inputSearch = document.getElementById("inpt_list_client_search");

        utils.addListener(btnSearch, "click", function () {
            controller.admin.searchClient(inputSearch.value);
        });
    };

    Core.controller.admin.searchClient = function (search) {
        var validKeys = ["lastName", "firstName", "email"];
        var list = utils.admin.search(search, validKeys, data.adminPanel.listClient);
        controller.admin.displayListClient(list);
    };


    /***********************************************************
     *                        RoomBook                         *
     **********************************************************/
    Core.controller.admin.displayListBookRoom = function (list) {
        //console.log(list);
        var container = document.getElementById("book_room_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_room_book");
        var body_container = document.getElementById("body_list_room_book");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "Ref", ""
        ];


        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    /***********************************************************
     *                  RestaurantBook                         *
     **********************************************************/

    Core.controller.admin.displayListBookRestaurant = function (list) {
        Core.utils.sortByDate(list, "date");
        var container = document.getElementById("book_restaurant_container");
        var header_container = document.getElementById("header_list_restaurant_book");
        var body_container = document.getElementById("body_list_restaurant_book");
        var classObject = "";

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "Client", "Date", "Places"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            var b = list[i];
            var client = utils.admin.getClientById(list[i].idClient);
            var fullName = client.lastName.charAt(0).toUpperCase() + client.lastName.slice(1) + " " + client.firstName.charAt(0).toUpperCase() + client.lastName.slice(1);
            var date = utils.formatDateTime(b.date);

            body[i] = [fullName, date, b.number];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    Core.controller.admin.initToolsRestaurant = function () {
        var btnSearch = document.getElementById("btn_list_restaurant_book_search");
        var inputSearch = document.getElementById("inpt_list_restaurant_book_search");

        utils.addListener(btnSearch, "click", function () {
            controller.admin.searchRestaurantBook(inputSearch.value);
        });
    };

    Core.controller.admin.searchRestaurantBook = function (search) {
        var validKeys = ["lastName", "firstName"];
        var list = utils.admin.searchRestaurant(search, validKeys, data.adminPanel.listRestaurantBook);
        controller.admin.displayListBookRestaurant(list);
    };

    /***********************************************************
     *                 FestiveRoomBook                         *
     **********************************************************/
    Core.controller.admin.displayListBookFestiveRoom = function (list) {
        //console.log(list);
        var container = document.getElementById("book_festiveRoom_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_festiveRoom_book");
        var body_container = document.getElementById("body_list_festiveRoom_book");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    /***********************************************************
     *                           Room                          *
     **********************************************************/
    Core.controller.admin.displayListRoom = function (list) {
        //console.log(list);
        var container = document.getElementById("room_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_room");
        var body_container = document.getElementById("body_list_room");

        header_container.innerHTML = "";
        body_container.innerHTML = "";


        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    /***********************************************************
     *                         Restaurant                      *
     **********************************************************/
    Core.controller.admin.displayListRestaurantTable = function (list) {
        console.log(list);
        var container = document.getElementById("restaurant_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_restaurant");
        var body_container = document.getElementById("body_list_restaurant");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    /***********************************************************
     *                     FestiveRoom                         *
     **********************************************************/
    Core.controller.admin.displayListFestiveRoom = function (list) {
        //console.log(list);
        var container = document.getElementById("festiveRoom_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_festiveRoom");
        var body_container = document.getElementById("body_list_festiveRoom");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };


    /***********************************************************
     *                       Buildings                         *
     **********************************************************/
    Core.controller.admin.displayListBuildings = function (list) {
        //console.log(list);
        var container = document.getElementById("building_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_building");
        var body_container = document.getElementById("body_list_building");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };


    /***********************************************************
     *                        Articles                         *
     **********************************************************/
    Core.controller.admin.displayListArticles = function (list) {
        //console.log(list);
        var container = document.getElementById("article_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_article");
        var body_container = document.getElementById("body_list_article");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    /***********************************************************
     *                          Galery                         *
     **********************************************************/
    Core.controller.admin.displayListGalery = function (list) {
        //console.log(list);
        var container = document.getElementById("galery_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_galery");
        var body_container = document.getElementById("body_list_galery");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }
    };

    /***********************************************************
     *                      NewsLetter                         *
     **********************************************************/
    Core.controller.admin.displaySendNewsLetter = function (list) {
        //console.log(list);
        var container = document.getElementById("newsLetter_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_newsLetter");
        var body_container = document.getElementById("body_list_newsLetter");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            ""
        ];

        Core.utils.admin.createHeadTemplate(headers, container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [];

            Core.utils.admin.createBodyTemplate(body[i], container, classObject, id);
        }

        //Core.service.admin.sendNewsLetter(newsLetter, subject);
    };



    /***********************************************************
     *                      CONTAINERS                         *
     **********************************************************/

    Core.controller.admin.displayBookManager = function (id) {
        var client_btn = document.getElementById("btn_client");
        var room_btn = document.getElementById("btn_book_room_menu");
        var restaurant_btn = document.getElementById("btn_book_restaurant_menu");
        var festiveRoom_btn = document.getElementById("btn_book_festiveRoom_menu");

        var client_container = document.getElementById("client_container");
        var room_container = document.getElementById("book_room_container");
        var restaurant_container = document.getElementById("book_restaurant_container");
        var festiveRoom_container = document.getElementById("book_festiveRoom_container");

        controller.admin.unDisplayBookManager();
        client_container.style.display = "block";

        utils.addListener(client_btn, "click", function () {
            controller.admin.unDisplayBookManager();
            client_container.style.display = "block";
        }, false);

        utils.addListener(room_btn, "click", function () {
            controller.admin.unDisplayBookManager();
            room_container.style.display = "block";
        }, false);

        utils.addListener(restaurant_btn, "click", function () {
            controller.admin.unDisplayBookManager();
            restaurant_container.style.display = "block";
        }, false);

        utils.addListener(festiveRoom_btn, "click", function () {
            controller.admin.unDisplayBookManager();
            festiveRoom_container.style.display = "block";
        }, false);

    };

    Core.controller.admin.displayStructureManager = function () {var client_btn = document.getElementById("btn_client");
        var building_btn = document.getElementById("btn_building_menu");
        var room_btn = document.getElementById("btn_room_menu");
        var restaurant_btn = document.getElementById("btn_restaurant_menu");
        var festiveRoom_btn = document.getElementById("btn_festiveRoom_menu");

        var building_container = document.getElementById("building_container");
        var room_container = document.getElementById("room_container");
        var restaurant_container = document.getElementById("restaurant_container");
        var festiveRoom_container = document.getElementById("festiveRoom_container");


        controller.admin.unDisplayStructureManager();

        building_container.style.display = "block";

        utils.addListener(building_btn, "click", function () {
            controller.admin.unDisplayStructureManager();
            building_container.style.display = "block";
        }, false);

        utils.addListener(room_btn, "click", function () {
            controller.admin.unDisplayStructureManager();
            room_container.style.display = "block";
        }, false);

        utils.addListener(restaurant_btn, "click", function () {
            controller.admin.unDisplayStructureManager();
            restaurant_container.style.display = "block";
        }, false);

        utils.addListener(festiveRoom_btn, "click", function () {
            controller.admin.unDisplayStructureManager();
            festiveRoom_container.style.display = "block";
        }, false);

    };

    Core.controller.admin.displayContentManager = function () {
        var article_btn = document.getElementById("btn_article_menu");
        var galery_btn = document.getElementById("btn_galery_menu");
        var newsLetter_btn = document.getElementById("btn_newsLetter_menu");

        var article_container = document.getElementById("article_container");
        var galery_container = document.getElementById("galery_container");
        var newsLetter_container = document.getElementById("newsLetter_container");


        controller.admin.unDisplayContentManager();

        article_container.style.display = "block";

        utils.addListener(article_btn, "click", function () {
            controller.admin.unDisplayContentManager();
            article_container.style.display = "block";
        }, false);

        utils.addListener(galery_btn, "click", function () {
            controller.admin.unDisplayContentManager();
            galery_container.style.display = "block";
        }, false);

        utils.addListener(newsLetter_btn, "click", function () {
            controller.admin.unDisplayContentManager();
            newsLetter_container.style.display = "block";
        }, false);
    };

    Core.controller.admin.unDisplayBookManager = function () {
        var client_container = document.getElementById("client_container");
        var room_container = document.getElementById("book_room_container");
        var restaurant_container = document.getElementById("book_restaurant_container");
        var festiveRoom_container = document.getElementById("book_festiveRoom_container");

        client_container.style.display = "none";
        room_container.style.display = "none";
        restaurant_container.style.display = "none";
        festiveRoom_container.style.display = "none";

    };

    Core.controller.admin.unDisplayStructureManager = function () {
        var building_container = document.getElementById("building_container");
        var room_container = document.getElementById("room_container");
        var restaurant_container = document.getElementById("restaurant_container");
        var festiveRoom_container = document.getElementById("festiveRoom_container");

        building_container.style.display = "none";
        room_container.style.display = "none";
        restaurant_container.style.display = "none";
        festiveRoom_container.style.display = "none";

    };

    Core.controller.admin.unDisplayContentManager = function () {
        var article_container = document.getElementById("article_container");
        var galery_container = document.getElementById("galery_container");
        var newsLetter_container = document.getElementById("newsLetter_container");

        article_container.style.display = "none";
        galery_container.style.display = "none";
        newsLetter_container.style.display = "none";
    };
})();