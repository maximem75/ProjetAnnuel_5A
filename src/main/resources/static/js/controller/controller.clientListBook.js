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
        
    };

    Core.controller.clientListBook.initListRoom = function (listRoom) {
        console.log(listRoom);
    };

    Core.controller.clientListBook.initListRestaurant = function (listRestaurant) {
        console.log(listRestaurant)
    };

    Core.controller.clientListBook.initListFestiveRoom = function (listFestiveRoom) {
        console.log(listFestiveRoom);
    };
})();