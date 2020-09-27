// UI controller
var DOMSections = {
    header: document.getElementById('#header'),
    about: document.getElementById('#about')
};

var UIController = (function() {
    return{
        hideSection: function(){
            about.style.display= 'none';
        }
    }
})();

// Global controller
var controller = (function(UIController) {
    return {
        init: function(){
            console.log('App has started');
            UIController.hideSection();
        }
    };
})(UIController);

controller.init();