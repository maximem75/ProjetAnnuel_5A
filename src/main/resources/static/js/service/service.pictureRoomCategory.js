/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.pictureRoomCategory = Core.service.pictureRoomCategory || {};

    Core.service.pictureRoomCategory.getList = function () {
        var object = {
            name   : "getList",
            method : "GET",
            url    : "/pictureRoomCategory",
            func : function (list) {
                data.listPictureRoomCategory = list;
            },
            error : function(){

            }
        };

        utils.ajaxRequest(object);
    };

    Core.service.pictureRoomCategory.create = function () {

    };

    Core.service.pictureRoomCategory.delete = function () {

    };

})();