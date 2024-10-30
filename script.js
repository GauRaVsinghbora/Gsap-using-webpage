// const body = document.querySelector("body");
// const btn = document.querySelector(".button");
// const circle = document.querySelector(".circle");

// let mode = "light";
// function enableDark(){
//     // body.style.backgroundColor = "black";
//     // btn.style.backgroundColor = "white";
//     // btn.style.color = "black";
//     // btn.innerText = "light mode";
//     if(mode === "light"){
//         body.classList.add("darkmode");
//         circle.style.backgroundColor = "white";
//         mode = "dark";
//     }
//     else{
//         body.classList.remove("darkmode");
//         circle.style.backgroundColor = "black";
//         mode = "light";
//     }
// }

// btn.addEventListener("click",enableDark);
// function movecircle(evt){
//     // console.log(evt.clientX,evt.clientY);
//     circle.style.transform = `translate(${evt.clientX -5}px, ${evt.clientY -5}px) skew(0)`;
// }
// body.addEventListener("mousemove",movecircle);


// gsap.from(".box",{
//     x : 1000,    // similar to translate in x 
//     // y : 1000,    // similar to translate in y
    
//     // if you want to see the speed then remove delay and duration
//     duration:2,
//     delay:1,
//     rotate: 720,
//     scale: .03125,
//     backgroundColor: 'red',
//     repeat: -1,
//     borderRadius: "50%",
//     repeat:-1,
//     yoyo: true
// })

// gsap.from("h1",{
//     opacity: 0,
//     duration:1,
//     y: 30,
//     delay: 1,
//     stagger: -1,
//     repeat:-1,
//     yoyo: true
// })

gsap.to("#box1",{
    x:1000,
    duration:1,
    delay:1
})
gsap.to("#box2",{
    x:1000,
    rotate: 360,
    duration:1,
    delay:2
})
gsap.to("#box3",{
    x:1000,
    borderRadius: "50%",
    duration:1,
    delay:3
})