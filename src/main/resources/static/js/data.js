/**
 * Created by maxime.
 *
 * version 1.0.0
 */
;(function(undefined) {
    "use strict";

    if(typeof Core === "undefined")
        throw "Core is not declared";

    Core.data = Core.data || {};

    Core.data = {
        pathHtml   : "html/",
        pathScript : "js/",
        viewList   : {
            accueil    : {
                name      : "accueil",
                viewPath  : "view.accueil.html",
                listImage : "img/home-bg.jpg"
            },
            connexion : {
                name       : "connexion",
                viewPath   : "view.signin.html",
                listImage : "img/home-bg.jpg"
            },
            chambre : {
                name      : "chambre",
                viewPath  : "view.chambre.html",
                listImage : "img/room1.jpg"
            },
            restaurant : {
                name      : "restaurant",
                viewPath  : "view.restaurant.html",
                listImage : "img/restau1.jpg"
            },
            contact : {
                name      : "contact",
                viewPath  : "view.contact.html",
                listImage : "img/contact1.jpg"
            },
            compte : {
                name      : "compte",
                viewPath  : "view.compte.html",
                listImage : "img/contact1.jpg"
            },
            about      : {
                name      : "about",
                viewPath  : "view.about.html",
                listImage : "img/about-bg.jpg"
            },
            logout     : {
                name      : "logout",
                viewPath  : "view.accueil.html",
                listImage : "img/home-bg.jpg"
            },
            confirmation : {
                name      : "confirmation",
                viewPath  : "view.confirmation.html",
                listImage : "img/contact1.jpg"
            },
            festiveRoom : {
                name      : "festiveRoom",
                viewPath  : "view.festiveRoom.html",
                listImage : "img/contact1.jpg"
            },
            clientListBook : {
                name      : "clientListBook",
                viewPath  : "view.clientListBook.html",
                listImage : "img/contact1.jpg"
            },
            admin : {
                name      : "admin",
                viewPath  : "view.admin.html",
                listImage : "img/contact1.jpg"
            },
            listArticle : {
                name      : "listArticle",
                viewPath  : "view.article.html",
                listImage : "img/contact1.jpg"
            }
        },
        //basicUrl   : "https://residencedeshautsdemenaye.fr/api",
        basicUrl   : "http://localhost:8080/api",
        getMenu : function () {
            return document.getElementById("ul_menu");
        },
        getIncludeContainer : function () {
            return document.getElementById("include_content");
        },
        roomPath : {
            "0" : ["Chambre Simple/img/IMG_5533.jpg"],
            "1" : ["Chambre double/img/IMG_5523.jpg","img/IMG_5531.jpg"],
            "2" : ["Suite junior/img/IMG_5507.jpg", "img/IMG_5548.jpg", "img/IMG_5549.jpg"],
            "3" : ["img/suiteExecutive/IMG_5551.jpg", "img/suiteExecutive/IMG_5552.jpg", "img/suiteExecutive/IMG_5553.jpg", "img/suiteExecutive/IMG_5554.jpg", "img/suiteExecutive/IMG_5555.jpg"]
        },
        currentPath : null,
        captchaResult : null,
        mainImageID : "main_header",
        httpCodeValide : [200, 201, 202, 302]
    };
})();
