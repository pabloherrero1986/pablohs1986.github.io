// UI controller
var DOMSections = {
    header: '#header',
    about: '#about'
};

var UIController = (function() {
    var hideSection = function(){
        document.getElementById(header).style.display= 'none';
    };
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