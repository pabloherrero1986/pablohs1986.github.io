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

$(function(){
	$(".typed1").typed({
		strings: [
      "Developer", 
      "Development student", 
      String.fromCodePoint(0x2764) + " Java",
      String.fromCodePoint(0x2764) + " coffee",
      String.fromCodePoint(0x2764) + " JavaScript",
      String.fromCodePoint(0x2764) + " web design",
      String.fromCodePoint(0x2764) + " developing software",
      String.fromCodePoint(0x2764) + " Angular",
      String.fromCodePoint(0x2764) + " Android",
      String.fromCodePoint(0x2764) + " beer",
      String.fromCodePoint(0x2764) + " guitars",
      String.fromCodePoint(0x2764) + " learning new technologies",
      "Front-end developer", 
      "Full-stack developer", 
      "Clean Code defender",
      "Pragmatic Programmer", 
      "Geek"],
		typeSpeed: 50,
    startDelay: 250,
    loop: true,
    shuffle: true,
    showCursor: true,
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

$(window).scroll(function() {
  if ($('#about').is(':visible')) {
    $(function(){
      $(".typed2").typed({
        strings: [
          "Hi! I'm a "],
        typeSpeed: 50,
        startDelay: 0,
        showCursor: false,
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
      });
    });
  }
});

$(window).scroll(function() {
  if ($('#about').is(':visible')) {
    $(function(){
      $(".typed3").typed({
        strings: [
          "developer"],
        typeSpeed: 50,
        startDelay: 1000,
        showCursor: true,
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
      });
    });
  }
});




// // UI controller

// var uiController = (function() {
//   // var projects = document.getElementsByClassName('project');

//     return{
//       // prueba: function() {
//       //   for (let i = 0; i < projects.length; i++) {
//       //     projects[i].addEventListener("mouseover", function(e) {
//       //       document.getElementById(e.target.id).classList.add('col-sm-12');
//       //       document.getElementById(e.target.id).classList.remove('col-sm-4');
//       //     })
//       //     projects[i].addEventListener("mouseout", function(e) {
//       //       document.getElementById(e.target.id).classList.remove('col-sm-12');
//       //       document.getElementById(e.target.id).classList.add('col-sm-4');
//       //     })
//       //   }
//       // }
//         // expandProjectOnClick : function() {
//         //   document.getElementsByClassName('.project').addEventListener("mouseover", function(e) {
//         //     document.getElementById(e.target.id).classList.add('col-sm-12');
//         //     document.getElementById(e.target.id).classList.remove('col-sm-4');
//         //   })
//         // },
//     }
// })();

// // Global controller
// var controller = (function(uiController) {
//     return {
//         init: function(){
//             console.log('App has started');
//             uiController.prueba();
//         }
//     };
// })(uiController);

// controller.init();