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

    };

    Core.controller.admin.displayListBookRoom = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListBookRestaurant = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListBookFestiveRoom = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListRoom = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListRestaurantTable = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListFestiveRoom = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListBuildings = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListArticles = function (list) {
        console.log(list);

    };

    Core.controller.admin.displayListGalery = function (list) {
        console.log(list);

    };

    Core.controller.admin.displaySendNewsLetter = function () {

        //Core.service.admin.sendNewsLetter(newsLetter, subject);
    };

})();