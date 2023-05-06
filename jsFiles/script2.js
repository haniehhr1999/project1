// FOR FAQ.HTML 

// When the user scrolls the page, execute myFunction
window.onscroll = function(){
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// show menu
var menu = document.querySelector('.menu')
var bg = document.querySelector('.header-down')
window.addEventListener('scroll' , function(){
    if (this.scrollY < 700) {
        menu.style.opacity = 0
        bg.style.backgroundColor = 'transparent'
    }
    if(this.scrollY >= 700){
        menu.style.opacity = 1
        bg.style.backgroundColor = 'white'
    }
})

// creating accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// for modal  ---------------------------------------------------------------------------------------
var list = document.querySelector('.list')
var circleBg = document.querySelector('.dayere')
var modal = document.querySelector('.modal')

modal.addEventListener('click' , function(){
  modal.style.opacity = 0
  circleBg.style.opacity = 0
  list.style.opacity = 0
  modal.style.visibility = 'hidden'
  circleBg.style.visibility = 'hidden'
  list.style.visibility = 'hidden'
})

// for hamburger menu  ---------------------------------------------------------------------------------------
var menu = document.querySelector('.hamburger')
var iHamburger = document.querySelector('.mdi-menu')

menu.addEventListener('click' , function(){
    modal.style.opacity = 1
    circleBg.style.opacity = 1
    list.style.opacity = 1
    modal.style.visibility = 'visible'
    circleBg.style.visibility = 'visible'
    list.style.visibility = 'visible'
    
    iHamburger.style.color = '#000058'
    menu.style.borderColor = '#000058'
})