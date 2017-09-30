/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.room = Core.service.room || {};

    /**
     * Return the listRoom found
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.room.search = function (json) {
        var paramRequest = "dateStart=" + json.dateStart + "&dateEnd=" + json.dateEnd;

        var object = {
            name   : "searchRoom",
            method : "GET",
            url    : "/room/getListRoomFree",
            func : function (listRoom) {
                if(listRoom !== null && listRoom !== undefined)
                    Core.controller.room.roomSearch(listRoom);
                else
                    return null;
            },
            error : function(statusCode){

            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.room.create = function (room) {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "create",
            method : "POST",
            url    : "/room",
            func : function () {

            },
            error : function(statusCode){
            }
        };

        utils.ajaxRequest(object, paramRequest, room);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.room.update = function (room) {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "update",
            method : "PUT",
            url    : "/room",
            func : function () {

            },
            error : function(statusCode){
            }
        };

        utils.ajaxRequest(object, paramRequest, room);
    };

    /**
     *
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.room.delete = function () {
        var paramRequest = "id=" + id + "&token=" + client.token;

        var object = {
            name   : "delete",
            method : "DELETE",
            url    : "/room",
            func : function () {

            },
            error : function(statusCode){
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

    Core.service.room.initListRoom = function () {
        var object = {
            name   : "initListRoom",
            method : "GET",
            url    : "/room",
            func : function (list) {
                data.listRoom = list;
            },
            error : function(statusCode){
            }
        };

        utils.ajaxRequest(object);
    };

    /**
     * Generate the template list room into the admin pnale
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.room.initAdminListRoom = function () {
        var paramRequest = "token=" + client.token;

        var object = {
            name   : "initAdminListRoom",
            method : "GET",
            url    : "/room",
            func : function (json) {
                var headers = {
                    id: {
                        content: "ID"
                    },
                    number: {
                        content: "Numéro"
                    },
                    idCategory: {
                        content: "Catégorie ID"
                    },
                    idBuilding: {
                        content : "Batiment ID"
                    },
                    button: {
                        update: {
                            btnClass: "btn btn-warning",
                            icone: "glyphicon glyphicon-pencil",
                            preId: "room_update",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonUpdate(e, Core.service.room.update());
                                }, false);
                            }
                        },
                        delete: {
                            btnClass: "btn btn-danger",
                            icone: "glyphicon glyphicon-remove",
                            preId: "room_delete",
                            func: function (element) {
                                utils.addListener(element, 'click', function (e) {
                                    utils.template.eventButtonRemove(e, Core.service.room.delete());
                                }, false);
                            }
                        }
                    }
                };

                utils.template.createLiTemplate(headers, null, document.getElementById("list_room_content"), "create", Core.service.room.create());
                utils.template.createLiTemplate(headers, json, document.getElementById("list_room_content"), "update");
            },
            error : function(statusCode){
            }
        };

        utils.ajaxRequest(object, paramRequest);
    };

})();