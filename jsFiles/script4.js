//for team.html


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

//////////hover

// class parallaxTiltEffect {
//     constructor({ element, tiltEffect }) {
//       this.element = element;
//       this.container = this.element.querySelector(".container");
//       this.size = [300, 360];
//       [this.w, this.h] = this.size;
  
//       this.tiltEffect = tiltEffect;
  
//       this.mouseOnComponent = false;
  
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.handleMouseEnter = this.handleMouseEnter.bind(this);
//       this.handleMouseLeave = this.handleMouseLeave.bind(this);
//       this.defaultStates = this.defaultStates.bind(this);
//       this.setProperty = this.setProperty.bind(this);
//       this.init = this.init.bind(this);
  
//       this.init();
//     }
  
//     handleMouseMove(event) {
//       const { offsetX, offsetY } = event;
  
//       let X;
//       let Y;
  
//       if (this.tiltEffect === "reverse") {
//         X = (offsetX - this.w / 2) / 3 / 3;
//         Y = -(offsetY - this.h / 2) / 3 / 3;
//       } else if (this.tiltEffect === "normal") {
//         X = -(offsetX - this.w / 2) / 3 / 3;
//         Y = (offsetY - this.h / 2) / 3 / 3;
//       }
  
//       this.setProperty("--rY", X.toFixed(2));
//       this.setProperty("--rX", Y.toFixed(2));
  
//       this.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
//       this.setProperty("--bX", 50 - (Y / 4).toFixed(2) + "%");
//     }
  
//     handleMouseEnter() {
//       this.mouseOnComponent = true;
//       this.container.classList.add("container--active");
//     }
  
//     handleMouseLeave() {
//       this.mouseOnComponent = false;
//       this.defaultStates();
//     }
  
//     defaultStates() {
//       this.container.classList.remove("container--active");
//       this.setProperty("--rY", 0);
//       this.setProperty("--rX", 0);
//       this.setProperty("--bY", "80%");
//       this.setProperty("--bX", "50%");
//     }
  
//     setProperty(p, v) {
//       return this.container.style.setProperty(p, v);
//     }
  
//     init() {
//       this.element.addEventListener("mousemove", this.handleMouseMove);
//       this.element.addEventListener("mouseenter", this.handleMouseEnter);
//       this.element.addEventListener("mouseleave", this.handleMouseLeave);
//     }
//   }
  
//   const $ = (e) => document.querySelector(e);
//   const wrap2 = new parallaxTiltEffect({
//     element: $(".wrap--2"),
//     tiltEffect: "normal",
//   });


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
    // alert('hi')
    modal.style.opacity = 1
    circleBg.style.opacity = 1
    list.style.opacity = 1
    modal.style.visibility = 'visible'
    circleBg.style.visibility = 'visible'
    list.style.visibility = 'visible'
})

