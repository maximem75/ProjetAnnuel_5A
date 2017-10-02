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
        service.admin.getListBuildings();
        service.admin.getListRoom();
        service.admin.getListRestaurantTable();
        service.admin.getListFestiveRoom();
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
        Core.controller.admin.manageRoomEvents();
        var container = document.getElementById("building_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_room");
        var header_category_container = document.getElementById("header_list_category");
        var header_invalidRoom_container = document.getElementById("header_list_invalid");

        var body_container = document.getElementById("body_list_room");
        var body_category_container = document.getElementById("body_list_category");
        var body_invalidRoom_container = document.getElementById("body_list_invalid");

        header_container.innerHTML = "";
        body_container.innerHTML = "";
        header_invalidRoom_container.innerHTML = "";

        header_category_container.innerHTML = "";
        body_category_container.innerHTML = "";
        body_invalidRoom_container.innerHTML = "";

        var headers = [
            "ID", "Numéro", "Catégorie", "Batiment"
        ];

        var category_headers = [
            "ID", "Nom", "Prix"
        ];

        var invalidRoom_headers = [
            "ID", "Debut", "Fin", "Chambre ID"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);
        Core.utils.admin.createHeadTemplate(category_headers, header_category_container);
        Core.utils.admin.createHeadTemplate(invalidRoom_headers, header_invalidRoom_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            var room = list[i];

            body[i] = [room.id, room.number, room.roomCategory.name, room.building.name];
            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }

        var category_body = [];

        for (var i = 0; i < data.listRoomCategories.length; i++) {
            var id = "";
            var category = data.listRoomCategories[i];

            category_body[i] = [category.id, category.name, category.price];
            Core.utils.admin.createBodyTemplate(category_body[i], body_category_container, classObject, id);
        }

        var invalid_body = [];

        for (var i = 0; i < data.adminPanel.listDateInvalideRoom.length; i++) {
            var id = "";
            var invalid = data.adminPanel.listDateInvalideRoom[i];

            invalid_body[i] = [invalid.id, utils.formatDateAdmin(invalid.dateStart), utils.formatDateAdmin(invalid.dateEnd), invalid.idRoom];
            Core.utils.admin.createBodyTemplate(invalid_body[i], body_invalidRoom_container, classObject, id);
        }
    };

    Core.controller.admin.manageRoomEvents = function () {
        data.adminPanel.listRoom = utils.numberSort(data.adminPanel.listRoom, "number");
        data.adminPanel.listDateInvalideRoom = utils.numberSort(data.adminPanel.listDateInvalideRoom, "dateStart");

        /***************** ROOM ************************/

        var btn_add = document.getElementById("btn_addRoom");
        var btn_update = document.getElementById("btn_updateRoom");
        var btn_remove = document.getElementById("btn_removeRoom");

        var inpt_addNumber = document.getElementById("inpt_addNumberRoom");
        var slct_addCategory = document.getElementById("slct_addCategoryRoom");
        var slct_addBuilding = document.getElementById("slct_addBuildingRoom");

        var slct_updtRoomId = document.getElementById("slct_updtRoomId");
        var slct_updtCategory = document.getElementById("slct_updtRoomCategory");
        var slct_updtBuilding = document.getElementById("slct_updtRoomBuilding");
        var inpt_updtRoomNumber = document.getElementById("inpt_updtNumberRoom");

        var slct_rmvRoom = document.getElementById("slct_removeRoom");

        var initSelect = function () {
            slct_addCategory.innerHTML = "<option disabled selected>Catégorie</option>";
            slct_addBuilding.innerHTML = "<option disabled selected>Batiment</option>";

            slct_updtRoomId.innerHTML = "<option disabled selected>ID</option>";
            slct_updtCategory.innerHTML = "<option disabled selected>Catégorie</option>";
            slct_updtBuilding.innerHTML = "<option disabled selected>Batiment</option>";

            slct_rmvRoom.innerHTML = "<option disabled selected>ID</option>";

            inpt_addNumber.value = "";
            inpt_updtRoomNumber.value = "";

            for (var i = 0; i < data.adminPanel.listRoom.length; i++) {
                var room = data.adminPanel.listRoom[i];
                slct_updtRoomId.innerHTML += "<option name='" + room.id + "'>" + room.id + "</option>";
                slct_rmvRoom.innerHTML += "<option name='" + room.id + "'>" + room.id + "</option>";
            }

            for (var i = 0; i < data.listRoomCategories.length; i++) {
                var category = data.listRoomCategories[i];

                slct_addCategory.innerHTML += "<option name='" + category.id + "'>" + category.name + "</option>";
                slct_updtCategory.innerHTML += "<option name='" + category.id + "'>" + category.name + "</option>";

            }

            for (var i = 0; i < data.adminPanel.listBuilding.length; i++) {
                var building = data.adminPanel.listBuilding[i];
                slct_addBuilding.innerHTML += "<option name='" + building.id + "'>" + building.name + "</option>";
                slct_updtBuilding.innerHTML += "<option name='" + building.id + "'>" + building.name + "</option>";
            }
        }();

        utils.removeListener(btn_add, "click");
        utils.addListener(btn_add, "click", function () {
            if (inpt_addNumber.value != "") {
                var selectedCategorie = slct_addCategory.options[slct_addCategory.selectedIndex];
                var selectedBuilding = slct_addBuilding.options[slct_addBuilding.selectedIndex];

                var json = {
                    number: inpt_addNumber.value,
                    roomCategory: {
                        id: selectedCategorie.getAttribute("name")
                    },
                    building: {
                        id: selectedBuilding.getAttribute("name")
                    }
                };
                Core.service.room.create(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_update, "click");
        utils.addListener(btn_update, "click", function () {
            var selectedCategorie = slct_updtCategory.options[slct_updtCategory.selectedIndex];
            var selectedBuilding = slct_updtBuilding.options[slct_updtBuilding.selectedIndex];
            var selectedRoomId = slct_updtRoomId.options[slct_updtRoomId.selectedIndex];
            var id = selectedRoomId.getAttribute("name");

            if (id != null && id != undefined) {
                var json = {
                    id: id,
                    number: inpt_updtRoomNumber.value,
                    roomCategory: {
                        id: selectedCategorie.getAttribute("name")
                    },
                    building: {
                        id: selectedBuilding.getAttribute("name")
                    }
                };

                Core.service.room.update(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_remove, "click");
        utils.addListener(btn_remove, "click", function () {
            var selectedRoomId = slct_rmvRoom.options[slct_rmvRoom.selectedIndex];
            var id = selectedRoomId.getAttribute("name");

            if (id != null && id != undefined) {
                Core.service.room.delete(id);
            }
        }, false);

        /***************** Category ************************/

        var btn_addCateg = document.getElementById("btn_addCategory");
        var btn_updateCateg = document.getElementById("btn_updateCategory");
        var btn_removeCateg = document.getElementById("btn_removeCategory");

        var inpt_addCategoryName = document.getElementById("inpt_addCategoryName");
        var inpt_addCategoryPrice = document.getElementById("inpt_addCategoryPrice");

        var slct_updtCategoryId = document.getElementById("slct_updtCategoryId");
        var inpt_updtCategoryName = document.getElementById("inpt_updtCategoryName");
        var inpt_updtCategoryPrice = document.getElementById("inpt_updtCategoryPrice");

        var slct_removeCategoryById = document.getElementById("slct_removeCategory");

        var initCategory = function () {
            slct_updtCategoryId.innerHTML = "<option disabled selected>ID</option>";
            slct_removeCategoryById.innerHTML = "<option disabled selected>Catégorie</option>";

            inpt_addCategoryName.value = "";
            inpt_addCategoryPrice.value = "";

            inpt_updtCategoryName.value = "";
            inpt_updtCategoryPrice.value = "";

            for (var i = 0; i < data.listRoomCategories.length; i++) {
                var category = data.listRoomCategories[i];
                slct_updtCategoryId.innerHTML += "<option name='" + category.name + "'>" + category.id + "</option>";
                slct_removeCategoryById.innerHTML += "<option name='" + category.id + "'>" + category.name + "</option>";

            }
        }();

        utils.removeListener(slct_updtCategoryId, "change");
        utils.addListener(slct_updtCategoryId, "change", function () {
            inpt_updtCategoryName.value = slct_updtCategoryId.options[slct_updtCategoryId.selectedIndex].getAttribute("name");
        }, false);

        utils.removeListener(btn_addCateg, "click");
        utils.addListener(btn_addCateg, "click", function () {
            if (inpt_addCategoryName.value != "" && inpt_addCategoryPrice.value != "") {

                var json = {
                    name: inpt_addCategoryName.value,
                    price: inpt_addCategoryPrice.value
                };
                Core.service.category.create(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_updateCateg, "click");
        utils.addListener(btn_updateCateg, "click", function () {
            var selectedCategoryId = slct_updtCategoryId.options[slct_updtCategoryId.selectedIndex];
            var id = selectedCategoryId.value;

            if (id != null && id != undefined) {
                var json = {
                    id: id,
                    name: inpt_updtCategoryName.value,
                    price: inpt_updtCategoryPrice.value
                };

                Core.service.category.update(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_removeCateg, "click");
        utils.addListener(btn_removeCateg, "click", function () {
            var selectedCategoryId = slct_removeCategoryById.options[slct_removeCategoryById.selectedIndex];
            var id = selectedCategoryId.getAttribute("name");

            if (id != null && id != undefined) {
                Core.service.category.delete(id);
            }
        }, false);


        /***************** Invalide Date  ************************/

        var btn_addInvalideRoom = document.getElementById("btn_addInvalideRoom");
        var btn_removeInvalideRoom = document.getElementById("btn_removeInvalideRoom");

        var slct_addInvalidaRoomID = document.getElementById("slct_addInvalidaRoomID");

        var startDatePicker = document.getElementById("date_invalidStart");
        var endDatePicker = document.getElementById("date_invalidEnd");

        startDatePicker.value = "";
        endDatePicker.value = "";

        var startDateID = "#date_invalidStart";
        var endDateID = "#date_invalidEnd";

        var minStart = new Date();
        var minEnd = new Date();

        minStart.setDate(minStart.getDate());
        minEnd.setDate(minEnd.getDate() + 1);

        var slct_removeInvalideRoomID = document.getElementById("slct_removeInvalideRoomID");

        var initInvalideRoom = function () {
            utils.reservation.datePicker(startDateID, minStart, null);
            utils.reservation.datePicker(endDateID, minEnd, null);

            $(startDateID).datepicker("option", "onSelect", function () {
                var minDate = $(startDateID).datepicker("getDate");
                var minDateEnd = $(startDateID).datepicker("getDate");
                minDateEnd.setDate(minDateEnd.getDate() + 1);

                $(endDateID).datepicker("option", "minDate", minDateEnd);
            });

            slct_addInvalidaRoomID.innerHTML = "<option disabled selected>Chambre ID</option>";
            slct_removeInvalideRoomID.innerHTML = "<option disabled selected>ID</option>";

            for (var i = 0; i < data.adminPanel.listDateInvalideRoom.length; i++) {
                var invalid = data.adminPanel.listDateInvalideRoom[i];
                slct_removeInvalideRoomID.innerHTML += "<option name='" + invalid.id + "'>" + invalid.id + "</option>";
            }

            for (var i = 0; i < data.listRoom.length; i++) {
                var room = data.listRoom[i];
                slct_addInvalidaRoomID.innerHTML += "<option name='" + room.id + "'>" + room.id + "</option>";
            }
        }();
        utils.removeListener(btn_addInvalideRoom, "click");
        utils.addListener(btn_addInvalideRoom, "click", function () {
            var idRoom = slct_addInvalidaRoomID.options[slct_addInvalidaRoomID.selectedIndex].getAttribute("name");

            if (startDatePicker.value != "" && endDatePicker.value != "" && idRoom != "" && idRoom != "Chambre ID") {
                var dateStart = $("#date_invalidStart").val().split("/");
                var dateEnd = $("#date_invalidEnd").val().split("/");

                var formatStart = dateStart[2] + "-" + dateStart[1] + "-" + dateStart[0];
                var formatEnd = dateEnd[2] + "-" + dateEnd[1] + "-" + dateEnd[0];

                var json = {
                    dateStart: formatStart,
                    dateEnd: formatEnd,
                    idRoom: idRoom
                };
                Core.service.invalidDateRoom.create(JSON.stringify(json));

            }

        }, false);

        utils.removeListener(btn_removeInvalideRoom, "click");
        utils.addListener(btn_removeInvalideRoom, "click", function () {
            var selectedInvalideId = slct_removeInvalideRoomID.options[slct_removeInvalideRoomID.selectedIndex];

            if(selectedInvalideId.value != "" && selectedInvalideId.value != "ID"){
                Core.service.invalidDateRoom.delete(selectedInvalideId.value);
            }
        }, false);
    };

    /***********************************************************
     *                         Restaurant                      *
     **********************************************************/
    Core.controller.admin.displayListRestaurantTable = function (list) {
        Core.controller.admin.manageRestaurantEvents();
        var container = document.getElementById("building_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_Restaurant");
        var body_container = document.getElementById("body_list_Restaurant");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "Numéro", "Places"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [list[i].number, list[i].numberChairs];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    Core.controller.admin.manageRestaurantEvents = function () {
        data.adminPanel.listRestaurant = utils.numberSort(data.adminPanel.listRestaurant, "number");
        var btn_add = document.getElementById("btn_addRestaurant");
        var btn_update = document.getElementById("btn_updateRestaurant");
        var btn_remove = document.getElementById("btn_removeRestaurant");

        var inpt_addNbr = document.getElementById("inpt_addNumberRestaurant");
        var inpt_add = document.getElementById("inpt_addRestaurant");

        var slct_updt = document.getElementById("slct_updateRestaurant");
        var inpt_updt = document.getElementById("inpt_updateRestaurant");

        var slct_rmv = document.getElementById("slct_removeRestaurant");

        var initSelect = function () {
            slct_updt.innerHTML = "<option></option>";
            slct_rmv.innerHTML = "<option></option>";

            inpt_addNbr.value = "";
            inpt_add.value = "";
            inpt_updt.value = "";

            for (var i = 0; i < data.adminPanel.listRestaurant.length; i++) {
                var restaurant = data.adminPanel.listRestaurant[i];

                slct_updt.innerHTML += "<option chairs='" + restaurant.numberChairs + "' name='" + restaurant.id + "'>" + restaurant.number + "</option>";
                slct_rmv.innerHTML += "<option chairs='" + restaurant.numberChairs + "' name='" + restaurant.id + "'>" + restaurant.number + "</option>";
            }
        }();

        utils.removeListener(btn_add, "click");
        utils.addListener(btn_add, "click", function () {
            if (inpt_add.value != "" && inpt_addNbr.value != "") {

                var json = {
                    number: inpt_addNbr.value,
                    numberChairs: inpt_add.value
                };

                Core.service.restaurant.create(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_update, "click");
        utils.addListener(btn_update, "click", function () {
            var selected = slct_updt.options[slct_updt.selectedIndex];
            var id = selected.getAttribute("name");
            if (id != null && id != undefined) {
                var json = {
                    id: id,
                    number: selected.value,
                    numberChairs: inpt_updt.value
                };
                Core.service.restaurant.udapte(JSON.stringify(json));

            }
        }, false);

        utils.removeListener(btn_remove, "click");
        utils.addListener(btn_remove, "click", function () {
            var selected = slct_rmv.options[slct_rmv.selectedIndex];
            var id = selected.getAttribute("name");
            if (id != null && id != undefined) {
                Core.service.restaurant.delete(id);
            }
        }, false);
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
        Core.controller.admin.manageBuildingEvents();
        var container = document.getElementById("building_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_building");
        var body_container = document.getElementById("body_list_building");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "Nom", "ID"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [list[i].name, list[i].id];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }
    };

    Core.controller.admin.manageBuildingEvents = function () {
        var btn_add = document.getElementById("btn_addBuilding");
        var btn_update = document.getElementById("btn_updateBuilding");
        var btn_remove = document.getElementById("btn_removeBuilding");

        var inpt_add = document.getElementById("inpt_addBuilding");

        var slct_updt = document.getElementById("slct_UudateBuilding");
        var inpt_updt = document.getElementById("inpt_updateBuilding");

        var slct_rmv = document.getElementById("slct_removeBuilding");

        var initSelect = function () {
            slct_updt.innerHTML = "<option></option>";
            slct_rmv.innerHTML = "<option></option>";

            inpt_add.value = "";
            inpt_updt.value = "";

            for (var i = 0; i < data.adminPanel.listBuilding.length; i++) {
                var building = data.adminPanel.listBuilding[i];

                slct_updt.innerHTML += "<option name='" + building.id + "'>" + building.name + "</option>";
                slct_rmv.innerHTML += "<option name='" + building.id + "'>" + building.name + "</option>";
            }
        }();

        utils.removeListener(btn_add, "click");
        utils.addListener(btn_add, "click", function () {
            if (inpt_add.value != "") {
                var json = {
                    name: inpt_add.value
                };

                Core.service.building.create(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_update, "click");
        utils.addListener(btn_update, "click", function () {
            var selected = slct_updt.options[slct_updt.selectedIndex];
            var id = selected.getAttribute("name");
            if (id != null && id != undefined) {
                var json = {
                    id: id,
                    name: inpt_updt.value
                };
                Core.service.building.update(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_remove, "click");
        utils.addListener(btn_remove, "click", function () {
            var selected = slct_rmv.options[slct_rmv.selectedIndex];
            var id = selected.getAttribute("name");
            if (id != null && id != undefined) {
                Core.service.building.delete(id);
            }
        }, false);
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

    Core.controller.admin.displayStructureManager = function () {
        var client_btn = document.getElementById("btn_client");
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