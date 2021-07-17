console.log("Your index.js file is loaded correctly!");

// preloader//

jQuery(window).on('load', function () {
    (function ($) {
    preloaderFadeOutInit();
    })(jQuery);
    });

//scroll to top//
 window.scrollTo({top: 0, behavior: "smooth"});
     



