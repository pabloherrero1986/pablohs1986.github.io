// Typed.js
$(function(){
	$(".typed").typed({
		strings: ["Thank you. <br/>Your message has been sent. <br/>I will contact you soon :)"],
		typeSpeed: 70,
		startDelay: 0,
		loop: false,
    showCursor: true,
    smartBackspace: false,
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

