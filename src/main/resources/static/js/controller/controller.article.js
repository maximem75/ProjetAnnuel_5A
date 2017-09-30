/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.controller.article = Core.controller.article || {};

    /**
     * Send a request to display articles in the article View
     */
    Core.controller.article.initView = function () {
        Core.service.article.getList();
    };

    Core.controller.article.displayArticles = function (list) {
          var template = "<div>";
    };
})();