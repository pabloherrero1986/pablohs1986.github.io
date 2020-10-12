// Bootstrap scrollspy

$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 70});   
  });

// Bootstrap smooth scrolling
$("#navbar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
        window.location.hash = hash;
      });
    }
});

// UI controller
var activeProject;

var uiController = (function() {
    function expandProject() {
      document.getElementById // Seguir aquí
    }

    return{
        expandProjectOnClick : function() {
          document.getElementsByClassName('project').addEventListener("click", expandProject())
        },
    }
})();

// Global controller
var controller = (function(uiController) {
    return {
        init: function(){
            console.log('App has started');
            uiController.expandProjectOnClick();
        }
    };
})(uiController);

controller.init();