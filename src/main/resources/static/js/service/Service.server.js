/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.service.server = Core.service.server || {};

    /**
     * Generate the paypal button with the book price
     * @returns {{name: string, method: string, url: string, func: func, error: error}}
     */
    Core.service.server.getDateTime = function () {

        var object = {
            name   : "bookRoom",
            method : "GET",
            url    : "/server",
            func : function (date) {

            },
            error : function(statusCode){

            }
        };

        utils.ajaxRequest(object, paramRequest, listRoomBooking);
    };

})();