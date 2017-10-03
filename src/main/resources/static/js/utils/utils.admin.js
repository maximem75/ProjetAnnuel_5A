/**
 * Created by maxime on 01/10/2017.
 */
;(function () {
    "use strict";

    if (typeof Core === "undefined")
        throw "Core is not declared";

    Core.utils.admin = Core.utils.admin || {};

    Core.utils.admin.createHeadTemplate = function (headers, container) {
        var template = "<div class='book_row_admin'>";

        for (var i = 0; i < headers.length; i++) {
            template += "<div class='book_cell_title'><span class='book_span_title'>" + headers[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

    Core.utils.admin.createBodyTemplate = function (body, container, classObject, id) {
        var template = "<div class='book_row_admin_body " + classObject + "' id='" + id + "'>";

        for (var i = 0; i < body.length; i++) {
            template += "<div class='book_cell'><span class='book_span'>" + body[i] + "</span></div>";
        }

        template += "</div>";

        container.innerHTML += template;
    };

    Core.utils.admin.getClientById = function (id) {
        for (var i = 0; i < data.adminPanel.listClient.length; i++) {
            if (data.adminPanel.listClient[i].id == id)
                return data.adminPanel.listClient[i];
        }
    };

    Core.utils.admin.getCategoryById = function (id) {
        for (var i = 0; i < data.listRoomCategories.length; i++) {
            if (data.listRoomCategories[i].id == id)
                return data.listRoomCategories[i];
        }
    };

    Core.utils.admin.getBuildingById = function (id) {
        for (var i = 0; i < data.adminPanel.listBuilding.length; i++) {
            if (data.adminPanel.listBuilding[i].id == id)
                return data.adminPanel.listBuilding[i];
        }
    };

    Core.utils.admin.getServiceById = function (id) {
        for (var i = 0; i < data.listFesiveRoomService.length; i++) {
            if (data.listFesiveRoomService[i].id == id)
                return data.listFesiveRoomService[i];
        }
    };

    Core.utils.admin.getRoomById = function (id) {
        for (var i = 0; i < data.adminPanel.listRoom.length; i++) {
            if (data.adminPanel.listRoom[i].id == id)
                return data.adminPanel.listRoom[i];
        }
    };


    Core.utils.admin.search = function (search, keys, currentList) {
        var list = [];

        var srch = search.toLowerCase();

        for (var i = 0; i < currentList.length; i++) {
            var tmp = currentList[i];
            for (var k in tmp) {
                if (keys.includes(k)) {
                    var val = tmp[k].toLowerCase();
                    if (val.indexOf(srch) != -1) {
                        list.push(tmp);
                        break;
                    }
                }
            }
        }

        return list;
    };

    Core.utils.admin.searchByIdClient = function (search, keys, currentList) {
        var list = [];
        var srch = search;

        for (var i = 0; i < currentList.length; i++) {
            var tmp = currentList[i];
            for (var k in tmp) {
                if (keys.includes(k)) {
                    var val = tmp[k];
                    if (val == srch) {
                        list.push(tmp);
                        break;
                    }
                }
            }
        }

        return list;
    };

    Core.utils.admin.searchRestaurant = function (search, keys, currentList) {
        var srch = search.toLowerCase();
        var list = [];

        for (var i = 0; i < currentList.length; i++) {
            var book = currentList[i];
            var client = utils.admin.getClientById(book.idClient);
            var firstname = client.firstName.toLowerCase();
            var lastname = client.lastName.toLowerCase();

            if (firstname.indexOf(srch) != -1 || lastname.indexOf(srch) != -1) {
                list.push(book);
            }
        }
        return list;
    };
})();