$('body').scrollspy({ target: '.navbar', offset: 50 });


// // UI controller
// var activeSection, id;

// var domSectionsID = {
//     section0: 'header',
//     section1: 'about',
//     section2: 'works',
//     section3: 'contact'
// };

// var uiController = (function() {
//     var links = Array.from(document.querySelectorAll('nav a'));
//     activeSection = "link0";

//     function getSectionFromId(id) {
//         return document.querySelector("#" + id).href;
//     };

//     return{
//         defaultSection: function() {
//             document.getElementById(domSectionsID.section0).style.visibility = "visible";
//             document.getElementById(domSectionsID.section1).style.visibility = "hidden";
//         },

//         showSectionScroll: function() {
//             var prevScrollpos = window.pageYOffset;
//             window.onscroll = function(){
//                 var currentScrollPos = window.pageYOffset;
//                 if (prevScrollpos > currentScrollPos) {
//                     document.getElementById(domSectionsID.section0).style.visibility = "visible";

//                 } else {
//                     document.getElementById(domSectionsID.section0).style.visibility = "hidden";

//                 }
//                 prevScrollpos = currentScrollPos;

//             }
//         },
  

//         showSection: function() {
//             for (let i = 0; i < links.length; i++) {
//                 links[i].addEventListener("click", function(e) {
//                     id = e.target.closest('a').id;
//                     section = getSectionFromId(id);
//                     console.log(section);
//                     console.log(id);
                    
//                     if (activeSection != id){
//                         switch(id){
//                             case 'link0':
//                                 document.getElementById(domSectionsID.section0).style.display = "block";
//                                 document.getElementById(domSectionsID.section1).style.display = "none";

//                                 break;
//                             case 'link1':
//                                 document.getElementById(domSectionsID.section1).style.display = "block";
//                                 document.getElementById(domSectionsID.section0).style.display = "none";
//                                 break;
//                             default:
//                                 break;
//                         }
//                     } else if (activeSection === id){
//                         console.log("You are already in that section...");
//                     }
//                     activeSection = id;
//                 });
//             }
//         }
//     }
// })();

// // Global controller
// var controller = (function(uiController) {
//     return {
//         init: function(){
//             console.log('App has started');
//             uiController.defaultSection();
//             uiController.showSectionScroll();
//             uiController.showSection();
//         }
//     };
// })(uiController);

// controller.init();