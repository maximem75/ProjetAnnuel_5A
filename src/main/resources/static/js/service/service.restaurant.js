/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.restaurant = Core.service.restaurant || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.create = function (restaurantTable) {
        var paramRequest = "token=" + client.token;
    
        var object = {
            name   : "create",
            method : "POST",
            url    : "/restaurantTable",
            func : function () {

            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest, restaurantTable);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.udapte = function (restaurantTable) {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "create",
            method : "PUT",
            url    : "/restaurantTable",
            func : function () {

            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest, restaurantTable);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.delete = function (id) {
        var paramRequest = "id=" + id + "&token=" + client.token;

        var object = {
            name   : "delete",
            method : "DELETE",
            url    : "/restaurantTable",
            func : function () {

            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    /**
     * Init the restaurant book into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.restaurant.initAdminViewListRestaurant = function () {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "initViewListRestaurant",
            method : "GET",
            url    : "/restaurantTable",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    nbClients: {
                        content: "Nombre de places"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "restaurant_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonUpdate(e, Core.service.restaurant.update());
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "restaurant_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.restaurant.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_restaurant_content"), "create", Core.service.restaurant.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_restaurant_content"), "update");
            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };
})();