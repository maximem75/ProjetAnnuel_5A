/**
 * Created by maxime on 30/09/2017.
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.galery = Core.controller.galery || {};

    /**
     * Send a request to display articles in the article View
     */
    Core.controller.galery.initView = function () {
        Core.service.galery.getList();
    };

    Core.controller.galery.displayGalery = function (listGalery) {
        console.log(listGalery);
    };
})();