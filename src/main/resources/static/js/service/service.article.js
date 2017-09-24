/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.article = Core.service.article || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.create = function (json) {
        var paramRequest = "token=" + client.token;

        var object =  {
            name   : "create",
            method : "POST",
            url    : "/article",
            func : function () {

            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest, json);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.udapte = function (json) {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "udapte",
            method : "PUT",
            url    : "/article",
            func : function () {

            },
            error : function(){

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
            name   : "delete",
            method : "DELETE",
            url    : "/article",
            func : function () {

            },
            error : function(){

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
            name   : "getList",
            method : "GET",
            url    : "/article/all",
            func : function (json) {
                for(var j in json){
                    utils.template.createArticleTemplate(document.getElementById("article_container"), json[j]);
                }
            },
            error : function(){

            }
        };

        utils.ajaxRequest(object);
    };

    Core.service.article.getById = function (id) {
        var paramRequest = "idArticle=" + id;

        var object = {
            name   : "getById",
            method : "GET",
            url    : "/article",
            func : function (json) {

            },
            error : function(){

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    /**
     * The callback func create the template article into the admin panel
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.article.initAdminViewListArticles = function () {
        var object = {
            name   : "initAdminViewListArticles",
            method : "GET",
            url    : "/article",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    title: {
                        content: "Titre"
                    },
                    content: {
                        content : "Contenu"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "room_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventArticleButtonUpdate(e, Core.service.article.udapte(), "article");
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "room_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.article.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createArticleLiTemplate(headers, json, document.getElementById("list_article_content"), "update");
            },
            error : function(){

            }
        };

        utils.ajaxRequest(object);
    };
})();