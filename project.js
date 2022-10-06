    
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
      autoplay:{
      delay:3000, 
      disableOnInteraction:false, 
      },
  });
  
  gsap.from("#img1",{
    y: "50%",
    duration: 2,
    ease : Expo.easeInOut,
    opacity: 0,
    stagger: 0.5,
  })
  
  gsap.from("#img2",{
    x: "50%",
    duration: 2,
    ease : Expo.easeInOut,
    opacity: 0,
    stagger: 0.5,
  },'-=2')
  
  gsap.from("#img3",{
    y: "50%",
    duration: 2,
    ease : Expo.easeInOut,
    opacity: 0,
    stagger: 0.5,
  },'-=2')

gsap.from("#page2 h4",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 70%",
  },
  y:"40%",
  ease:Expo.easeInOut,
  duration:2
})
gsap.from("#page2 h1",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"body",
    start:"top 65%",
  },
  y:"40%",
  ease:Expo.easeInOut,
  duration:2
})
gsap.from("#page3",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"body",
    start:"top 130%",
    end:"top 80%",
  },
  scale:0,
  ease:Expo.easeInOut,
  duration:2
})
gsap.from("#page4",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"body",
    start:"top 130%",
    end:"top 80%",
  },
  scale:.5,
  ease:Expo.easeInOut,
  duration:2
})