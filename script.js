function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init()

document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.left = `${dets.x + 10}px`
  document.querySelector("#cursor").style.top = `${dets.y + 10}px`
})

gsap.to("#page1 #img",{
  width:"100%",
  scrollTrigger:{
    trigger: "#page1",
    scroller: "#main",
    // markers:true,
    start: "top 10%",
    end: "top -40%",
    scrub: true,
    pin: true
  }
})

gsap.from("#page2 h1",{
  // color:"red",
  rotate:5,
  y:100,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:3 
  }
})

var flag = 0;

document.querySelector("#menu").addEventListener("click",function(){
  if(flag == 0)
  {
    document.querySelector("#menu").style.height = "20px"
    document.querySelector("#line1").style.rotate = "36deg"
    document.querySelector("#line2").style.rotate = "-36deg"
    document.querySelector("#full-scr").style.top = "0"
    flag = 1
  }
  else
  {
    document.querySelector("#menu").style.height = "10px"
    document.querySelector("#line1").style.rotate = "0deg"
    document.querySelector("#line2").style.rotate = "0deg"
    document.querySelector("#full-scr").style.top = "-100%"
    flag = 0
  }
})


var loader = gsap.timeline();

loader.to("#kuch-bhi h5",{
  y:-75,
  duration:2,
  delay:0.2,
  // stagger:2,

})

.to("#text-anime",{
  y:-50,
  rotateX:-90,
  duration:1,
  opacity:0,
})

.to("#loader1",{
  height:0,
  duration:0.8,
})

.to("#loader2",{
  height:0,
  duration:0.8,
},"-=0.3")

.to("#loader3",{
  height:0,
  duration:0.8,
},"-=1")

.to("#loader4",{
  height:0,
  duration:0.8,
},"-=0.5")

.to("#loader",{
  top:"-100vh",
  duration:0.1,
})

var page3 =gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    scrub:2,
    // markers:true,
    start:"top 0%",
    end:"top -100%",
    pin:true
  }
})

page3.from("#page3 h1",{
  scale:1.95,
  lineHeight:"30vw",
},"text")

page3.from("#page3 h2",{
  scale:1.8,
  lineHeight:"42vw",
},"text")

page3.to("#page4",{
 y:"-200vh",
},"text")

var all = document.querySelectorAll(".box");
all.forEach(function(e){

    e.addEventListener("mouseenter",function(){ 
    document.querySelector("#cursor").innerHTML = "More"
    document.querySelector("#cursor").style.scale = 3.5
    document.querySelector("#cursor").style.backgroundColor = "#fff"
    document.querySelector("#cursor").style.borderColor = "#fff"
    document.querySelector("#cursor").style.transition = "all linear 0.1s"
    document.addEventListener("mousemove", function (dets) {
    document.querySelector("#cursor").style.left = `${dets.x + 30}px`
    document.querySelector("#cursor").style.top = `${dets.y + 30}px`
    // document.querySelector("#cursor").pointerEvents = none

    })
    // document.querySelector(".box").style.cursor = "none"
    
    
    
    
  })
  
  e.addEventListener("mouseleave",function(){
    document.querySelector("#cursor").innerHTML = ""
    document.querySelector("#cursor").style.scale = 1
    document.querySelector("#cursor").style.backgroundColor = "transparent"
    document.querySelector("#cursor").style.borderColor = "#e1e1e1"
    document.addEventListener("mousemove", function (dets) {
      document.querySelector("#cursor").style.transition = "all linear 0.01s"
      document.querySelector("#cursor").style.left = `${dets.x + 10}px`
      document.querySelector("#cursor").style.top = `${dets.y + 10}px`
    })
  
  })
  
})

var page5 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    pin:true,
    scrub:2,

  }
})

page5.to("#page5 h1",{
  scale:3.5,
  filter:"blur(20px)",
  opacity:0,
  
},"para")

page5.from("#page5 #para",{
  filter:"blur(30px)",
  opacity:0,
},"para",)

gsap.from("#page6 h1",{
  y:150,
  rotate:6,
  // stagger:1,
  scrollTrigger:{
    trigger:"#page6 h1",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:true
  

  }
})