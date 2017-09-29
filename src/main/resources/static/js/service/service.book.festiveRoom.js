/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.book.festiveRoom = Core.service.book.festiveRoom || {};

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.festiveRoom.bookFestiveRoom = function (festiveRoom) {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "bookFestiveRoom",
            method: "POST",
            url: "/festiveRoomBooking",
            func: function (festiveRoomBook) {
                data.frbID = festiveRoomBook.id;
                Core.service.server.getKey();
                Core.controller.festiveRoom.bookServices(festiveRoomBook.id);
                Core.service.book.festiveRoom.getPrice(festiveRoomBook.id);
                Core.service.book.festiveRoom.getConvertedPrice(festiveRoomBook.id);
                Core.controller.festiveRoom.initCancelButton(festiveRoomBook.id);
                Core.controller.festiveRoom.initResume();
            },
            error: function (statusCode) {
                document.getElementById("valide_container").textContent = "";
                document.getElementById("error_container").textContent = "La salle des fêtes n'est pas disponible durant cette période."
            }
        };

        utils.ajaxRequest(object, paramRequest, festiveRoom);
    };

    Core.service.book.festiveRoom.validate = function () {
        var paramRequest = "id=" + data.frbID + "&token=" + client.token;
        var object =  {
            name: "bookFestiveRoom",
            method: "PUT",
            url: "/festiveRoomBooking/validate",
            func: function () {
                Core.controller.festiveRoom.success();
            },
            error: function (statusCode) {
                Core.controller.festiveRoom.error();
            }
        };

        utils.ajaxRequest(object, paramRequest, null, false, true);
    };

    Core.service.book.festiveRoom.getPrice = function (id) {
        var paraRequest = "id=" + id + "&token=" + client.token;

        var object =  {
            name: "getPrice",
            method: "GET",
            url: "/festiveRoomBooking/getPrice",
            func: function (price) {
                Core.controller.festiveRoom.initCostResume(price);
            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paraRequest);
    };

    Core.service.book.festiveRoom.getConvertedPrice = function (id) {
        var paraRequest = "id=" + id + "&token=" + client.token;

        var object =  {
            name: "getConvertedPrice",
            method: "GET",
            url: "/festiveRoomBooking/getConvertedPrice",
            func: function (price) {
                Core.payment.paypal.generateButton(price, Core.service.book.festiveRoom.validate);
            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paraRequest);
    };

    Core.service.book.festiveRoom.cancel = function (id) {
        data.frbID = null;
        var paraRequest = "id=" + id + "&token=" + client.token;

        var object =  {
            name: "cancel",
            method: "PUT",
            url: "/festiveRoomBooking/cancel",
            func: function () {

            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paraRequest, null, false , true);
    };

    /**
     * 
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.festiveRoom.getListBookById = function () {
        return {
            name: "getListBookById",
            method: "GET",
            url: "/festiveRoomBooking",
            func: function (json) {
                var headers = {
                    id: {
                        content: "Numéro"
                    },
                    date_start : {
                        content: "Arrivée"
                    },
                    date_end: {
                        content: "Départ"
                    },
                    price: {
                        content: "Prix"
                    }
                };

                utils.template.createLiTemplate(headers, json, document.getElementById("book_festiveRoom_content"), "read");
            },
            error: function (statusCode) {

            }
        };
    };
   
})();