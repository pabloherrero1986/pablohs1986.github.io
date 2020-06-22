$(document).ready(function() {
preloaderFadeOutTime = 250;
function hidePreloader() {
var preloader = $('.spinner-wrapper').delay(3000);
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});