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
    Core.service.article.create = function (title, content) {
        var paramRequest = data.basicUrl + "/article?token=" + client.token + "&title=" + title + "&content=" + content;;

        var form = document.getElementById("formtDataArticle");
        form.action =  + paramRequest;
        var formData = new FormData(form);

        var oReq = new XMLHttpRequest();
        oReq.open("post", paramRequest, true);
        oReq.onload = function(oEvent) {
            if (oReq.status == 201) {
                Core.service.pictureRoomCategory.getList();
            } else {
                alert("error")
            }
        };

        oReq.send(formData);
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