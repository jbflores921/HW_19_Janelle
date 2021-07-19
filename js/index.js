console.log("Your index.js file is loaded correctly!");


//scroll to top//
 window.scrollTo({top: 0, behavior: "smooth"});

 //dark mode//
 function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
$("button").hover(function(){
  $(this).css("cursor","pointer");
},function(){
  $(this).css("cursor","auto");
});

