/**
 * Created by maxime on 30/09/2017.
 */

;(function (undefined) {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.galery = Core.service.galery || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.galery.create = function (json) {
        var paramRequest = "token=" + client.token;

        var object = {
            name: "create",
            method: "POST",
            url: "/pictureGalery",
            func: function () {

            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, json);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.galery.udapte = function (json) {
        var paramRequest = "token=" + client.token;

        var object = {
            name: "udapte",
            method: "PUT",
            url: "/pictureGalery",
            func: function () {

            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, json);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.galery.delete = function () {
        var paramRequest = "token=" + client.token + "&id=" + id;

        var object = {
            name: "delete",
            method: "DELETE",
            url: "/pictureGalery",
            func: function () {

            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, null);
    };

    /**
     * The callback func create the article list into the view article
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.galery.getList = function () {
        var object = {
            name: "getList",
            method: "GET",
            url: "/pictureGalery/all",
            func: function (list) {
                Core.controller.galery.displayGalery(list);
            },
            error: function () {

            }
        };

        utils.ajaxRequest(object);
    };

})();