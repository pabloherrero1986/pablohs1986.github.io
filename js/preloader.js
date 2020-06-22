$(document).ready(function() {
preloaderFadeOutTime = 250;
function hidePreloader() {
var preloader = $('.spinner-wrapper').delay(2500);
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});