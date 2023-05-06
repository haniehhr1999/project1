// for Work.html

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
// var menu = document.querySelector('.menu')
// var bg = document.querySelector('.header-down')
// window.addEventListener('scroll' , function(){
//     if (this.scrollY < 700) {
//         menu.style.opacity = 0
//         bg.style.backgroundColor = 'transparent'
//     }
//     if(this.scrollY >= 700){
//         menu.style.opacity = 1
//         bg.style.backgroundColor = 'white'
//     }
// })
// show vertical menu
var vertical = document.querySelector('.vertical-menu')
// var linnk = doq.querySelector('.linnk')
window.addEventListener('scroll' , function(){
    if (this.scrollY < 2200) {
        vertical.style.opacity = 0
        // vertical.style.visibility = 'hidden'
    }
    if(this.scrollY >= 2200) {
        vertical.style.opacity = 1
        vertical.style.visibility = 'visible'

        vertical.classList.add('animate__animated')
        vertical.classList.add('animate__bounceInDown')
    }
})

var footer = document.querySelector('footer')
console.log(footer.getClientRects());
window.addEventListener('scroll' , function(){
    if (footer.getClientRects.top) {
        
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
var menu = document.querySelector('.hamburger')
menu.addEventListener('click' , function(){
    modal.style.opacity = 1
    circleBg.style.opacity = 1
    list.style.opacity = 1
    modal.style.visibility = 'visible'
    circleBg.style.visibility = 'visible'
    list.style.visibility = 'visible'
})





