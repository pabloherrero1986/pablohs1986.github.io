// UI controller
var activeSection, id;

// var domSectionsID = {
//     section0: 'header',
//     section1: 'about',
//     section2: 'works',
//     section3: 'contact'
// };

// activeSection = domSectionsID.section0;

var uiController = (function() {
    var links = Array.from(document.querySelectorAll('nav a'));
    

    return{
        showSection: function(){
            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener("click", function(e) {
                    id = e.target.id;
                    console.log(id);
                    document.getElementById(id).style.display = "visible";
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
            uiController.showSection();
        }
    };
})(uiController);

controller.init();