var h1 = document.querySelector('h1')
var conMain = document.querySelector('.con-main')
conMain.style.height = window.innerHeight + 'px'


// for arrow sliders  ---------------------------------------------------------------------------------------
var arrowRight = document.querySelector('.right')
var arrowLeft = document.querySelector('.left')
var pic1 = document.querySelector('.pic1')
var pic2 = document.querySelector('.pic2')
var pic3 = document.querySelector('.pic3')
var x = 0
arrowRight.addEventListener('click' , function(){
    if (x == 0) {
        pic1.style.opacity = 0;
        pic2.style.opacity = 0.5;
        pic3.style.opacity = 0;
        h1.innerHTML = 'For the poeple, For the animals, for the world'
        x = 1
    }else if(x == 1){
        pic1.style.opacity = 0;
        pic2.style.opacity = 0;
        pic3.style.opacity = 0.5;
        h1.innerHTML = 'watch our Talk@Google revealing Project CMF'
        x = 2
    }else if(x == 2){
        pic1.style.opacity = 0.5;
        pic2.style.opacity = 0;
        pic3.style.opacity = 0;
        h1.innerHTML = 'our vision for Meat Production in 2040'
        x = 0
    }
})
arrowLeft.addEventListener('click' , function(){
    if (x == 0) {
        pic1.style.opacity = 0;
        pic2.style.opacity = 0;
        pic3.style.opacity = 0.5;
        h1.innerHTML = 'watch our Talk@Google revealing Project CMF'
        x = 2
    }else if(x == 2){
        pic1.style.opacity = 0.5;
        pic2.style.opacity = 0;
        pic3.style.opacity = 0;
        h1.innerHTML = 'our vision for Meat Production in 2040'
        x = 1
    }else if(x == 1){
        pic1.style.opacity = 0;
        pic2.style.opacity = 0.5;
        pic3.style.opacity = 0;
        h1.innerHTML = 'For the poeple, For the animals, for the world'
        x = 0
    }
})

// for scroll and change location ---------------------------------------------------------------

document.body.addEventListener('wheel' , function(event){
    if (event.wheelDelta > 0) {
        window.location = 'file:///C:/Users/paeiz/Desktop/%D9%BE%D8%B1%D9%88%DA%98%D9%87%20%D9%BE%D8%A7%DB%8C%D8%A7%D9%86%20%D8%AA%D8%B1%D9%85/animation.html'
        // window.location = 'file:///C:/Users/paeiz/Desktop/%D9%BE%D8%B1%D9%88%DA%98%D9%87%20%D9%BE%D8%A7%DB%8C%D8%A7%D9%86%20%D8%AA%D8%B1%D9%85/home.html'
    }else if(event.wheelDelta < 0){
        window.location = 'file:///C:/Users/paeiz/Desktop/%D9%BE%D8%B1%D9%88%DA%98%D9%87%20%D9%BE%D8%A7%DB%8C%D8%A7%D9%86%20%D8%AA%D8%B1%D9%85/animation.html'
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

    iHamburger.style.color = 'white'
    menu.style.borderColor = 'white'
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
// for loading  -------------------------------------------------------------------------------------------------
var animation = document.querySelector('.animation')
setTimeout(() => {
    animation.style.display = 'none'
    animation.style.opacity = 0
}, 3000);

// for small circles on perimeter of the big circle ---------------------------------------------------------
var bord1 = document.querySelector('.bord1')
var bord2 = document.querySelector('.bord2')
var bord3 = document.querySelector('.bord3')
bord1.addEventListener('click' , function(){
    pic1.style.opacity = 0.5
    pic2.style.opacity = 0
    pic3.style.opacity = 0
})
bord2.addEventListener('click' , function(){
    pic1.style.opacity = 0
    pic2.style.opacity = 0.5
    pic3.style.opacity = 0
})
bord3.addEventListener('click' , function(){
    pic1.style.opacity = 0
    pic2.style.opacity = 0
    pic3.style.opacity = 0.5
})