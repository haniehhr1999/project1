// for arrow sliders 100
var container1 = document.querySelector('.chapter1-con-slider')
var boxSlider = document.querySelectorAll('.box-slider')
var arrRight1 = document.querySelector('.arrR-chap1')
var arrLeft1 = document.querySelector('.arrL-chap1')

var finish = document.querySelector('.finish')
var getRect = finish.getClientRects()[0].right
var faseleRight = window.innerWidth - getRect
// console.log(getRect);
x = 0
y = 0

arrRight1.addEventListener('click' , function(){
    if (y> -1000) {
        if (x == 0) {
            x = 1
            y -= 317
            boxSlider.forEach(item => {
                item.style.transform = `translateX(${y}px)`
            });
        
        } else if (x == 1) {
            x = 0
            y -= 317
            boxSlider.forEach(item => {
                item.style.transform = `translateX(${y}px)`
            });
            
        }
    }
    arrLeft1.style.opacity = 1
    arrLeft1.style.visibility = 'visible'
})

arrLeft1.addEventListener('click' , function(){

    if (y <- 10) {
        if (x == 0) {
            x = 1
            y += 317
            boxSlider.forEach(item => {
                item.style.transform = `translateX(${y}px)`
            });
            
            
        } else if (x == 1) {
            x = 0
            y += 317
            boxSlider.forEach(item => {
                item.style.transform = `translateX(${y}px)`
            });
          
        }
   }
    // boxSlider.forEach(item => {
    //     item.style.transform = 'translateX(317px)'
    // });
})



// for dotted sliders 
var noq1 = document.querySelector('.noq1')
var noq2 = document.querySelector('.noq2')
var noq3 = document.querySelector('.noq3')
var dotted = document.querySelectorAll('.noqte')
dotted.forEach(element => {
    element.addEventListener('click' , function(){
        element.style.color = '#bd905b'
    })
});

// display chapters
var chapFooter = document.querySelector('.chapter1-footer')
if (scrollY > chapFooter.getBoundingClientRect().bottom) {
    alert('slm')
}


// When the user scrolls the page, execute myFunction
window.onscroll = function(){
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if (scrolled == 100) {
        
    }
}
// console.log(window);

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

    iHamburger.style.color = '#000058'
    menu.style.borderColor = '#000058'
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