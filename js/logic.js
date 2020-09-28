// UI controller
var activeSection, id;

var domSectionsID = {
    section0: 'header',
    section1: 'about',
    section2: 'works',
    section3: 'contact'
};

// activeSection = domSectionsID.section0;

var uiController = (function() {
    var links = Array.from(document.querySelectorAll('nav a'));
    activeSection = "link0";
    id="link0";

    function getSectionFromId(id) {
        return document.querySelector("#" + id).href;
    };

    return{
        defaultSection: function() {
            document.getElementById(domSectionsID.section0).style.display = "block";
            document.getElementById(domSectionsID.section1).style.display = "none";
        },

        showSection: function() {
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener("click", function(e) {
                    id = e.target.closest('a').id;
                    section = getSectionFromId(id);
                    console.log(section);
                    console.log(id);
                    
                    if (activeSection != id){
                        switch(id){
                            case 'link0':
                                document.getElementById(domSectionsID.section0).style.display = "block";
                                document.getElementById(domSectionsID.section1).style.display = "none";

                                break;
                            case 'link1':
                                document.getElementById(domSectionsID.section1).style.display = "block";
                                document.getElementById(domSectionsID.section0).style.display = "none";
                                break;
                            default:
                                break;
                        }
                    } else if (activeSection === id){
                        console.log("You are already in that section...");
                    }
                    activeSection = id;
                });
            }
        }
    }
})();

// Global controller
var controller = (function(uiController) {
    return {
        init: function(){
            console.log('App has started');
            uiController.defaultSection();
            uiController.showSection();
        }
    };
})(uiController);

controller.init();