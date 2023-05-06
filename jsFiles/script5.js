/* for contact.html  */

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
var hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click' , function(){
    modal.style.opacity = 1
    circleBg.style.opacity = 1
    list.style.opacity = 1
    modal.style.visibility = 'visible'
    circleBg.style.visibility = 'visible'
    list.style.visibility = 'visible'
})