/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function (undefined) {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.article = Core.service.article || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.create = function (json) {
        var paramRequest = "token=" + client.token;

        var object = {
            name: "create",
            method: "POST",
            url: "/article",
            func: function () {
               
            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest, json , null, true);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.udapte = function (json) {
        var paramRequest = "token=" + client.token;

        var object = {
            name: "udapte",
            method: "PUT",
            url: "/article",
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
    Core.service.article.delete = function () {
        var paramRequest = "token=" + client.token + "&id=" + id;

        var object = {
            name: "delete",
            method: "DELETE",
            url: "/article",
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
    Core.service.article.getList = function () {
        var object = {
            name: "getList",
            method: "GET",
            url: "/article/all",
            func: function (list) {
                Core.controller.article.displayArticles(list);
            },
            error: function () {

            }
        };

        utils.ajaxRequest(object);
    };

    Core.service.article.getById = function (id) {
        var paramRequest = "idArticle=" + id;

        var object = {
            name: "getById",
            method: "GET",
            url: "/article",
            func: function (article) {

            },
            error: function () {

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };
})();