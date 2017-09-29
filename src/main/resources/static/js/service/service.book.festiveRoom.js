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
        var paraRequest = "token=" + client.token;

        var object =  {
            name: "bookFestiveRoom",
            method: "POST",
            url: "/festiveRoomBooking",
            func: function (festiveRoomBook) {
                Core.controller.festiveRoom.bookServices(festiveRoomBook.id);
                Core.service.book.festiveRoom.getPrice(festiveRoomBook.id);
                Core.controller.festiveRoom.initResume();
            },
            error: function (statusCode) {
                document.getElementById("valide_container").textContent = "";
                document.getElementById("error_container").textContent = "La salle des fêtes n'est pas disponible durant cette période."
            }
        };

        utils.ajaxRequest(object, paraRequest, festiveRoom);
    };

    Core.service.book.festiveRoom.getPrice = function (id) {
        var paraRequest = "id=" + id + "&token=" + client.token;

        var object =  {
            name: "getPrice",
            method: "GET",
            url: "/getPrice",
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
            url: "/getConvertedPrice",
            func: function (price) {
                //Core.payment.paypal.generateButton(price);
            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paraRequest,);
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