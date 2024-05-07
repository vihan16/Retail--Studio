function smoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
smoothScroll()

function cursorEffect(){
    var page1Content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x - page1Content.getBoundingClientRect().x ,
        y:dets.y - page1Content.getBoundingClientRect().y 
    })
})
page1Content.addEventListener("mouseenter",function(){  
    gsap.to(cursor,{
        scale:1
    })
})
page1Content.addEventListener("mouseleave",function(){  
    gsap.to(cursor,{
        scale:0
    })
})
}
cursorEffect()

var tl = gsap.timeline()

tl.from(".loader h3",{
    x:30,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.to(".loader",{
    opacity:0
})
tl.from(".page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.2,
    duration:.3,
    delay:-0.2
})
tl.to(".loader",{
    display:"none"
})

function cursor2Effect(){
    var page2Content = document.querySelector(".page3")
var cursor = document.querySelector(".cursor2")

page2Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x - page2Content.getBoundingClientRect().x - 50,
        y:dets.y - page2Content.getBoundingClientRect().y -30
    })
})
page2Content.addEventListener("mouseenter",function(){  
    gsap.to(cursor,{
        scale:1
    })
})
page2Content.addEventListener("mouseleave",function(){  
    gsap.to(cursor,{
        scale:0
    })
})
}
cursor2Effect()

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 215
            })
        })
    })
}
page2Animation()



