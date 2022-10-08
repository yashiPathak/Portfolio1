function show(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection : true
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function (dets) {
  if (dets.direction === "up") {
      document.querySelector("#uppernav").style.top = "0%";
     
      
  }
  else if (dets.direction == "down") {
      document.querySelector("#uppernav").style.top = "-100%";
  }
})

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
show();

var tl1 = gsap.timeline();

tl1.from("#page3>h2",{
  opacity:0,
  y:150,
  duration:6,
  stagger:1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#page3>h2",
    scrub: 0.3,
  }
})


var tl2 = gsap.timeline();

tl2.from("#page5>#elem-div>a",{
  opacity:0,
  y:150,
  duration:6,
  stagger:1,
  scrollTrigger: {
    scroller:"#main",
    trigger:"#page5>#elem-div>a",
    scrub: 0.3,
  }
})

const elems = document.querySelectorAll(".elems");
const imageDiv = document.querySelector("#image")

elems.forEach(function(elem){
   
   elem.addEventListener("mouseenter", function(dets) {
    let img = elem.getAttribute("data-image");
    let w = elem.getAttribute("data-width");
    let h = elem.getAttribute("data-height");
    imageDiv.style.backgroundImage = `url(${img})`
    imageDiv.style.widthh = w;
    imageDiv.style.height = h;
   })
   document.addEventListener("mousemove", function(dets){
     imageDiv.style.left = `${dets.x + 250}px`;
     imageDiv.style.top = `${dets.y - 900}px`;
   })
});


const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e =>  {

cursor.setAttribute("style", "top : "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;") 
})

document.addEventListener('click', () => {
cursor.classList.add("expand");

setTimeout(() => {
    cursor.classList.remove("expand");
}, 500);
})

const container = document.getElementById("photodiv");
// where "container" is the id of the container
  container.addEventListener("wheel", function (e) {
    if (e.deltaY> 0) {
      container.scrollLeft += 100;
      e.preventDefault();
// prevenDefault() will help avoid worrisome 
// inclusion of vertical scroll 
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });

  const cursor1 = document.getElementById("cursor1");
  const page = document.getElementById("page5");
  page.addEventListener("mouseenter",function(){
    document.querySelector(".cursor").style.display = "none";
  })
  cursor1.addEventListener('mousemove', function(event) {
     page.addEventListener('mouseenter', function() {
       let x = event.clientX;
       let y = event.clientY;
  
       cursor1.style.top = x + "px";
       cursor1.style.left = y + "px";
     })
    
  })

  const circle = document.getElementById("circle");

  circle.addEventListener('click', function(event) {
        let x = event.clientX;
        let y = event.clientY;

        circle.style.top = x + "px";
        circle.style.lelft = y + "px";
  }) 