/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.restaurant = Core.controller.restaurant || {};

    /**
     * Init the restaurant view and events
     */
    Core.controller.restaurant.initView = function () {
        var typeElement, numberElement, btn_booking;

        typeElement = document.getElementById("select_time");
        numberElement = document.getElementById("text_number");
        btn_booking = document.getElementById("btn_search_table");
        
        utils.addListener(btn_booking, "click", function () {
            var date = new Date();
            var res;
            var month = date.getMonth() + 1;

            switch (typeElement.options[typeElement.selectedIndex].value){
                case "m_0":
                     res = date.getFullYear() + "-" + month + "-" + date.getDate() + "T12:00:00";
                    break;
                case "m_1":
                    res = date.getFullYear() + "-" + month + "-" + date.getDate() + "T13:00:00";
                    break;
                case "m_3":
                    res = date.getFullYear() + "-" + month + "-" + date.getDate() + "T19:30:00";
                    break;
                case "m_4":
                    res = date.getFullYear() + "-" + month + "-" + date.getDate() + "T20:30:00";
                    break;
                case "m_5":
                    res = date.getFullYear() + "-" + month + "-" + date.getDate() + "T21:30:00";
                    break;
            }
            var json = {
                date : res,
                number: numberElement.value,
                idClient : window.client.id
            };
            Core.service.book.restaurant.bookRestaurant(JSON.stringify(json));
        }, false);
    };

})();
