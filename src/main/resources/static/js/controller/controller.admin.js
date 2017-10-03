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
        var jsonClientSorted = Core.utils.alphabeticSortDesc(list, "lastName");
        var container = document.getElementById("client_container");
        var header_container = document.getElementById("header_list_client");
        var body_container = document.getElementById("body_list_client");
        var classObject = "book_festiveRoom_object";

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "ID", "Nom", "Prénom", "Téléphone", "Email", "Adresse", "Code Postal", "Pays"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

       /* var body = [];
        if (jsonClientSorted.length > 0) {
            for (var i = 0; i < jsonClientSorted.length; i++) {
                var client = list[i];
                var id = "";
                body[i] = [client.id, client.lastName, client.firstName, client.phone, client.email, client.address, client.postalCode, client.country];
                Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
            }
        }*/
    };

    Core.controller.admin.initToolsClient = function () {
        var btnSearch = document.getElementById("btn_list_client_search");
        var inputSearch = document.getElementById("inpt_list_client_search");

        utils.addListener(btnSearch, "click", function () {
            controller.admin.searchClient(inputSearch.value);
        });
    };

    Core.controller.admin.searchClient = function (search) {
        var validKeys = ["id", "lastName", "firstName", "email"];
        var list = utils.admin.search(search, validKeys, data.adminPanel.listClient);
        controller.admin.displayListClient(list);
    };


    /***********************************************************
     *                        RoomBook                         *
     **********************************************************/
    Core.controller.admin.displayListBookRoom = function (list) {
        var container = document.getElementById("book_room_container");
        var classObject = "";
        var header_container = document.getElementById("header_list_room_book");
        var body_container = document.getElementById("body_list_room_book");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        var headers = [
            "ID", "REF_BOOK", "Chambre ID", "Client ID",  "Email", "Début", "Fin"
        ];


        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        /*for (var i = 0; i < list.length; i++) {
            var id = "";
            var client = utils.admin.getClientById(list[i].idClient);
            body[i] = [list[i].id, list[i].refBookRoom, list[i].idRoom, client.id, client.email, list[i].dateStart, list[i].dateEnd];

            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }*/
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

        utils.numberSort(list, "number");
        for (var i = 0; i < list.length; i++) {
            var id = "";
            var room = list[i];

            body[i] = [room.id, room.number, room.roomCategory.name, room.building.name];
            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }

        var category_body = [];
        utils.alphabeticSortDesc(data.listRoomCategories, "name");
        for (var i = 0; i < data.listRoomCategories.length; i++) {
            var id = "";
            var category = data.listRoomCategories[i];

            category_body[i] = [category.id, category.name, category.price];
            Core.utils.admin.createBodyTemplate(category_body[i], body_category_container, classObject, id);
        }

        var invalid_body = [];

        utils.sortByDate(data.adminPanel.listDateInvalideRoom, "dateStart");
        for (var i = 0; i < data.adminPanel.listDateInvalideRoom.length; i++) {
            var id = "";
            var invalid = data.adminPanel.listDateInvalideRoom[i];

            invalid_body[i] = [invalid.id, utils.formatDateAdmin(invalid.dateStart), utils.formatDateAdmin(invalid.dateEnd), invalid.idRoom];
            Core.utils.admin.createBodyTemplate(invalid_body[i], body_invalidRoom_container, classObject, id);
        }

        Core.controller.admin.manageRoomEvents();
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
            utils.numberSort(data.adminPanel.listRoom, "id");
            for (var i = 0; i < data.adminPanel.listRoom.length; i++) {
                var room = data.adminPanel.listRoom[i];
                slct_updtRoomId.innerHTML += "<option name='" + room.id + "'>" + room.id + "</option>";
                slct_rmvRoom.innerHTML += "<option name='" + room.id + "'>" + room.id + "</option>";
            }

            utils.numberSort(data.listRoomCategories, "id");
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

        utils.removeListener(slct_updtRoomId, "change");
        utils.addListener(slct_updtRoomId, "change", function () {
            var room = utils.admin.getRoomById(slct_updtRoomId.options[slct_updtRoomId.selectedIndex].getAttribute("name"));
            console.log(room);
            if(room != null){
                for(var i = 0 ; i < slct_updtCategory.options.length ; i++){
                    var tmp = slct_updtCategory.options[i];
                    if(tmp.getAttribute("name") == room.roomCategory.id){;
                        slct_updtCategory.options[i].selected = "selected";
                    }
                }

                for(var i = 0 ; i < slct_updtBuilding.options.length ; i++){
                    var tmp = slct_updtBuilding.options[i];
                    if(tmp.getAttribute("name") == room.building.id)
                        slct_updtBuilding.options[i].selected = "selected";
                }

                inpt_updtRoomNumber.value = room.number;
            }
        }, false);

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

            utils.alphabeticSortDesc(data.listRoomCategories, "name");
            for (var i = 0; i < data.listRoomCategories.length; i++) {
                var category = data.listRoomCategories[i];
                slct_removeCategoryById.innerHTML += "<option name='" + category.id + "'>" + category.name + "</option>";

            }

            utils.numberSort(data.listRoomCategories, "id");
            for (var i = 0; i < data.listRoomCategories.length; i++) {
                var category = data.listRoomCategories[i];
                slct_updtCategoryId.innerHTML += "<option name='" + category.id + "'>" + category.id + "</option>";
            }
        }();

        utils.removeListener(slct_updtCategoryId, "change");
        utils.addListener(slct_updtCategoryId, "change", function () {
            var category = utils.admin.getCategoryById(slct_updtCategoryId.options[slct_updtCategoryId.selectedIndex].getAttribute("name"));
            inpt_updtCategoryName.value = category.name;
            inpt_updtCategoryPrice.value = category.price;
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

            utils.numberSort(data.adminPanel.listDateInvalideRoom, "id");
            for (var i = 0; i < data.adminPanel.listDateInvalideRoom.length; i++) {
                var invalid = data.adminPanel.listDateInvalideRoom[i];
                slct_removeInvalideRoomID.innerHTML += "<option name='" + invalid.id + "'>" + invalid.id + "</option>";
            }

            utils.numberSort(data.listRoom, "id");
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

            if (selectedInvalideId.value != "" && selectedInvalideId.value != "ID") {
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

        utils.removeListener(slct_updt, "change");
        utils.addListener(slct_updt, "change", function () {
            inpt_updt.value = slct_updt.options[slct_updt.selectedIndex].getAttribute("chairs");
        }, false);

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
        var container = document.getElementById("festiveRoom_container");
        var classObject = "";

        var header_container = document.getElementById("header_list_festiveRoom");
        var body_container = document.getElementById("body_list_festiveRoom");

        var header_service_container = document.getElementById("header_list_service");
        var body_service_container = document.getElementById("body_list_service");

        var header_invalid_container = document.getElementById("header_list_invalidFestive");
        var body_invalid_container = document.getElementById("body_list_invalidFestive");

        header_container.innerHTML = "";
        body_container.innerHTML = "";

        header_service_container.innerHTML = "";
        body_service_container.innerHTML = "";

        header_invalid_container.innerHTML = "";
        body_invalid_container.innerHTML = "";


        var headers = [
            "ID", "Prix"
        ];

        Core.utils.admin.createHeadTemplate(headers, header_container);

        var body = [];

        for (var i = 0; i < list.length; i++) {
            var id = "";
            body[i] = [list[i].id, list[i].price];
            Core.utils.admin.createBodyTemplate(body[i], body_container, classObject, id);
        }

        var headers_service = [
            "ID", "Nom", "Prix", "Quantité"
        ];

        Core.utils.admin.createHeadTemplate(headers_service, header_service_container);

        var body_service = [];

        var tmp = utils.alphabeticSortDesc(data.listFesiveRoomService, "name");
        for (var i = 0; i < tmp.length; i++) {
            var id = "";
            var service = tmp[i];
            body_service[i] = [service.id, service.name, service.price, service.quantity];

            Core.utils.admin.createBodyTemplate(body_service[i], body_service_container, classObject, id);
        }

        var headers_invalid = [
            "ID", "Début", "Fin"
        ];

        Core.utils.admin.createHeadTemplate(headers_invalid, header_invalid_container);

        var body_invalid = [];
        utils.sortByDate(data.adminPanel.listDateInvalideFestiveRoom, "dateStart");
        for (var i = 0; i < data.adminPanel.listDateInvalideFestiveRoom.length; i++) {
            var id = "";
            var invalid = data.adminPanel.listDateInvalideFestiveRoom[i];
            body_invalid[i] = [invalid.id, utils.formatDateAdmin(invalid.dateStart), utils.formatDateAdmin(invalid.dateEnd)];

            Core.utils.admin.createBodyTemplate(body_invalid[i], body_invalid_container, classObject, id);
        }

        //// Events ////
        controller.admin.manageFestiveRoomEvents();
    };

    Core.controller.admin.manageFestiveRoomEvents = function () {
        data.adminPanel.listDateInvalideFestiveRoom = utils.sortByDate(data.adminPanel.listDateInvalideFestiveRoom, "dateStart");
        data.listFesiveRoomService = utils.alphabeticSortAsc(data.listFesiveRoomService, "name");

        /************* Festive Room ******************/

        var btn_update = document.getElementById("btn_updateFestiveRoom");
        var selectPrice = document.getElementById("slct_updtFestiveRoomPrice");
        selectPrice.value = "";

        utils.removeListener(btn_update);
        utils.addListener(btn_update, "click", function () {
            if (selectPrice.value != "") {
                var json = data.listFestiveRoom[0];
                json.price = selectPrice.value;

                Core.service.festiveRoom.update(JSON.stringify(json));
            }
        }, false);

        /************* Service  ******************/
        var btn_addService = document.getElementById("btn_addService");
        var btn_updateService = document.getElementById("btn_updateService");
        var btn_removeService = document.getElementById("btn_removeService");

        var inpt_addServiceName = document.getElementById("inpt_addServiceName");
        var inpt_addServicePrice = document.getElementById("inpt_addServicePrice");
        var inpt_addServiceQuantity = document.getElementById("inpt_addServiceQuantity");

        var slct_updtServiceId = document.getElementById("slct_updtServiceId");
        var inpt_updtServiceName = document.getElementById("inpt_updtServiceName");
        var inpt_updtServicePrice = document.getElementById("inpt_updtServicePrice");
        var inpt_updtServiceQuantity = document.getElementById("inpt_updtServiceQuantity");

        var slct_removeService = document.getElementById("slct_removeService");

        var initService = function () {
            inpt_addServiceName.value = "";
            inpt_addServicePrice.value = "";
            inpt_addServiceQuantity.value = "";

            slct_updtServiceId.innerHTML = "<option disabled selected>ID</option>";
            inpt_updtServiceName.value = "";
            inpt_updtServicePrice.value = "";
            inpt_updtServiceQuantity.value = "";

            slct_removeService.innerHTML = "<option disabled selected>ID</option>";

            var tmp = data.listFesiveRoomService;
            tmp = utils.numberSort(tmp, "id");
            for (var i = 0; i < tmp.length; i++) {
                var service = tmp[i];
                slct_updtServiceId.innerHTML += "<option name='" + service.id + "'>" + service.id + "</option>";
                slct_removeService.innerHTML += "<option name='" + service.id + "'>" + service.id + "</option>";
            }
        }();

        utils.removeListener(slct_updtServiceId, "change");
        utils.addListener(slct_updtServiceId, "change", function () {
            var selected = slct_updtServiceId.options[slct_updtServiceId.selectedIndex];
            var service = utils.admin.getServiceById(selected.getAttribute("name"));
            inpt_updtServiceName.value = service.name;
            inpt_updtServicePrice.value = service.price;
            inpt_updtServiceQuantity.value = service.quantity;
        }, false);

        utils.removeListener(btn_addService, "click");
        utils.addListener(btn_addService, "click", function () {
            if (inpt_addServiceName.value != "" && inpt_addServicePrice.value != "" && inpt_addServiceQuantity.value != "") {
                var json = {
                    name: inpt_addServiceName.value,
                    price: inpt_addServicePrice.value,
                    quantity: inpt_addServiceQuantity.value
                };

                service.services.create(JSON.stringify(json));
            }
        }, false);

        utils.removeListener(btn_updateService, "click");
        utils.addListener(btn_updateService, "click", function () {
            var selected = slct_updtServiceId.options[slct_updtServiceId.selectedIndex];
            if (selected.value != "" && selected.value != "ID" && inpt_updtServiceName.value != "" && inpt_updtServicePrice.value != "" && inpt_updtServiceQuantity.value != "") {
                var json = {
                    id: selected.getAttribute("name"),
                    name: inpt_updtServiceName.value,
                    price: inpt_updtServicePrice.value,
                    quantity: inpt_updtServiceQuantity.value
                };

                service.services.update(JSON.stringify(json));
            }

        }, false);

        utils.removeListener(btn_removeService, "click");
        utils.addListener(btn_removeService, "click", function () {
            var selected = slct_removeService.options[slct_removeService.selectedIndex];
            if (selected.value != "" && selected.value != "ID") {
                service.services.delete(selected.getAttribute("name"));
            }
        }, false);


        /************* Invalide date  ******************/

        var btn_addInvalideFestiveRoom = document.getElementById("btn_addInvalideFestiveRoom");
        var btn_removeInvalideFestiveRoom = document.getElementById("btn_removeInvalideFestiveRoom");

        var startDatePicker = document.getElementById("date_invalidFestiveStart");
        var endDatePicker = document.getElementById("date_invalidFestiveEnd");

        startDatePicker.value = "";
        endDatePicker.value = "";

        var startDateID = "#date_invalidFestiveStart";
        var endDateID = "#date_invalidFestiveEnd";

        var minStart = new Date();
        var minEnd = new Date();

        minStart.setDate(minStart.getDate());
        minEnd.setDate(minEnd.getDate() + 1);

        var slct_removeInvalideFestiveRoomID = document.getElementById("slct_removeInvalideFestiveRoomID");

        var initInvalideFestiveRoom = function () {
            utils.reservation.datePicker(startDateID, minStart, null);
            utils.reservation.datePicker(endDateID, minEnd, null);

            $(startDateID).datepicker("option", "onSelect", function () {
                var minDate = $(startDateID).datepicker("getDate");
                var minDateEnd = $(startDateID).datepicker("getDate");
                minDateEnd.setDate(minDateEnd.getDate() + 1);

                $(endDateID).datepicker("option", "minDate", minDateEnd);
            });

            slct_removeInvalideFestiveRoomID.innerHTML = "<option disabled selected>ID</option>";

            var tmp = data.adminPanel.listDateInvalideFestiveRoom;
            tmp = utils.numberSort(tmp, "id");
            for (var i = 0; i < data.adminPanel.listDateInvalideFestiveRoom.length; i++) {
                var invalid = tmp[i];
                slct_removeInvalideFestiveRoomID.innerHTML += "<option name='" + invalid.id + "'>" + invalid.id + "</option>";
            }

        }();
        utils.removeListener(btn_addInvalideFestiveRoom, "click");
        utils.addListener(btn_addInvalideFestiveRoom, "click", function () {

            if (startDatePicker.value != "" && endDatePicker.value != "") {
                var dateStart = $("#date_invalidFestiveStart").val().split("/");
                var dateEnd = $("#date_invalidFestiveEnd").val().split("/");

                var formatStart = dateStart[2] + "-" + dateStart[1] + "-" + dateStart[0];
                var formatEnd = dateEnd[2] + "-" + dateEnd[1] + "-" + dateEnd[0];

                var json = {
                    dateStart: formatStart,
                    dateEnd: formatEnd,
                    idFestiveRoom: data.listFestiveRoom[0].id
                };
                Core.service.invalidDateFestiveRoom.create(JSON.stringify(json));
            }

        }, false);

        utils.removeListener(btn_removeInvalideFestiveRoom, "click");
        utils.addListener(btn_removeInvalideFestiveRoom, "click", function () {
            var selectedInvalideId = slct_removeInvalideFestiveRoomID.options[slct_removeInvalideFestiveRoomID.selectedIndex];
            if (selectedInvalideId.value != "" && selectedInvalideId.value != "ID") {
                Core.service.invalidDateFestiveRoom.delete(selectedInvalideId.getAttribute("name"));
            }
        }, false);
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