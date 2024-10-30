const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click",(e)=>{
    sidebar.style.display = "flex";
    console.log("you want to open it.")
})
close.addEventListener("click",(e)=>{
    sidebar.style.display = "none";
    console.log("you want to close it.")
})


let timelines = gsap.timeline();
timelines.from("#header h3",{
    y:-30,
    opacity:0,
    duration:1,
})
timelines.from("#header nav ul a",{
    y:-30,
    opacity:0,
    delay:0,
    duration:1,
    stagger:.3,
})
timelines.to(".hero_tag span",{
    delay:0,
    opacity:1,
    backgroundColor: "rgba(255, 255, 255, 0.397)",
    color: "black"
})