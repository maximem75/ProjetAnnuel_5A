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
    Core.service.server.getKey = function (p) {
        var paramRequest = "token=" + client.token;
        var price = p;

        var object = {
            name   : "getKey",
            method : "GET",
            url    : "/server",
            func : function (key) {
                Core.payment.paypal.generateButton(price, key)
            },
            error : function(statusCode){

            }
        };

        utils.ajaxRequest(object, paramRequest, null, false, true);
    };

})();