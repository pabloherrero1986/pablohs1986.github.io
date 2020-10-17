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

$("#header a").on('click', function(event) {
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


// Typed.js
$(function(){
	$(".typedHeader").typed({
		strings: [
      "Developer", 
      "Student", 
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
      "Clean Code defender",
      "Pragmatic Programmer", 
      "Geek"],
		typeSpeed: 70,
    startDelay: 0,
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
      $(".typedAboutA").typed({
        strings: [
          "Hi! I'm a "],
        typeSpeed: 70,
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
      $(".typedAboutB").typed({
        strings: [
          "developer"],
        typeSpeed: 70,
        startDelay: 1250,
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