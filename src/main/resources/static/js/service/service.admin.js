/**
 * Created by maxime on 01/10/2017.
 */
;(function () {
    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.admin = Core.service.admin || {};

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.admin.getListClient = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "getListClient",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListRoomBook = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListRestaurantBook = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListFestiveRoomBook = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListRoom = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListRestaurantTable = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListFestiveRoom = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListBuildings = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListArticles = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.getListGalery = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.admin.sendNewsLetter = function () {
        var paramRequest = "token=" + client.token;

        var object =  {
            name: "",
            method: "GET",
            url: "/",
            func: function () {

            },
            error: function (statusCode) {
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };


})();