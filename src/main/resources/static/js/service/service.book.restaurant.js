/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.book.restaurant = Core.service.book.restaurant || {};

    /**
     * The callback func display to the client if the book is available
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.restaurant.bookRestaurant = function (restaurantBook) {
        var paramRequest = "token=" + client.token;
        console.log(new Date);
        var object =  {
            name: "bookRestaurant",
            method: "POST",
            url: "/restaurantTableBooking",
            func: function () {
                document.getElementById("error_container").textContent = "";
                document.getElementById("valide_container").textContent = "Réservation effectuée";
            },
            error: function (statusCode) {
                document.getElementById("valide_container").textContent = "";
                document.getElementById("error_container").textContent = "";
                if(statusCode == 406){
                    document.getElementById("error_container").textContent = "Il n'a pas assez de places disponibles.";
                } else if(statusCode == 404){
                    document.getElementById("error_container").textContent = "Vous avez déjà effectué une réservation.";
                } else {
                    document.getElementById("error_container").textContent = "La date limite de réservation pour cette plage horaire est dépassée.";
                }

            }
        };

        utils.ajaxRequest(object, paramRequest, restaurantBook, false, true);
    };

    Core.service.book.restaurant.update = function (restaurantBook) {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "update",
            method: "PUT",
            url: "/restaurantTableBooking",
            func: function () {

            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paramRequest, restaurantBook);
    };

    Core.service.book.restaurant.getByIdClient = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "getByIdClient",
            method: "GET",
            url: "/restaurantTableBooking/getByIdClient",
            func: function () {

            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    /**
     * Generate the restaurant list book by id client
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.book.restaurant.getListBookById = function () {
        var paramRequest = "token=" + client.token;

        var object = {
            name: "bookRestaurant",
            method: "GET",
            url: "/restaurantTableBooking",
            func: function (json) {
                var headers = {
                    date : {
                        content: "Date"
                    },
                    type: {
                       content: "Plage horaire"
                    },
                    number:{
                        content:  "Nombre de personnes"
                    }
                };

                utils.template.createLiTemplate(headers, json, document.getElementById("book_restaurant_content"), "read");
            },
            error: function (statusCode) {

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

})();