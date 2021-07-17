console.log("Your index.js file is loaded correctly!");

// preloader//

$(window).on('load', function () {
    (function ($) {
    preloaderFadeOutInit();
    });
    });

//scroll to top//
 window.scrollTo({top: 0, behavior: "smooth"});

 //dark mode//
 function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
     



