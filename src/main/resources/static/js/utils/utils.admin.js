/**
 * Created by maxime on 01/10/2017.
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.utils.admin = Core.utils.admin || {};

    Core.utils.admin.createHeadTemplate = function (headers, container) {
        var template = "<div class='book_row'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell_title'><span class='book_span_title'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

    Core.utils.admin.createBodyTemplate = function (body, container, classObject, id) {
        var template = "<div class='book_row " + classObject + "' id='" + id + "'>";

        for (var i = 0; i < list.length; i++) {
            template += "<div class='book_cell'><span class='book_span'>" + list[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };
})();