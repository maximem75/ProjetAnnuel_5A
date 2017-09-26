/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function (undefined) {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.category = Core.service.category || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.category.create = function () {
        var paramRequest = "token" + client.token;

        var object =  {
            name: "create",
            method: "POST",
            url: "/roomCategory",
            func: function () {
                
            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, null);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.category.delete = function () {
        var paramRequest = "token" + client.token + "&id=" + id;

        var object = {
            name: "delete",
            method: "DELETE",
            url: "/roomCategory",
            func: function () {

            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, null);
    };

    /**
     * Store the category list into a global variable
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.category.getListCategories = function () {
        var object = {
            name: "getListCategories",
            method: "GET",
            url: "/roomCategory",
            func: function (listCategories) {
                if (listCategories !== null && listCategories !== undefined)
                    data.listRoomCategories = listCategories;
                else
                    return null;

                window.roomCategories = listCategories;
            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object);
    };

    /**
     * Generate the template containing categories list
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.category.initViewListCategories = function () {
        var object = {
            name: "initViewListCategories",
            method: "GET",
            url: "/roomCategory",
            func: function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    name: {
                        content: "Nom"
                    },
                    costByNight: {
                        content: "Coût par nuit"
                    },
                    button: {
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "categorie_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.category.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_category_content"), "create", Core.service.category.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_category_content"), "read");
            },
            error: function (statusCode) {
            }
        };
    };

})();