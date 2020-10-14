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

var uiController = (function() {
  var projects = document.getElementsByClassName('project');

    return{
      prueba: function() {
        for (let i = 0; i < projects.length; i++) {
          projects[i].addEventListener("mouseover", function(e) {
            document.getElementById(e.target.id).classList.add('col-sm-12');
            document.getElementById(e.target.id).classList.remove('col-sm-4');
          })
          projects[i].addEventListener("mouseout", function(e) {
            document.getElementById(e.target.id).classList.remove('col-sm-12');
            document.getElementById(e.target.id).classList.add('col-sm-4');
          })
        }
      }
        // expandProjectOnClick : function() {
        //   document.getElementsByClassName('.project').addEventListener("mouseover", function(e) {
        //     document.getElementById(e.target.id).classList.add('col-sm-12');
        //     document.getElementById(e.target.id).classList.remove('col-sm-4');
        //   })
        // },
    }
})();

// Global controller
var controller = (function(uiController) {
    return {
        init: function(){
            console.log('App has started');
            uiController.prueba();
        }
    };
})(uiController);

controller.init();