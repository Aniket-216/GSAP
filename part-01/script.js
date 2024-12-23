var tl = gsap.timeline();

tl.from("#nav", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

tl.from("#nav-right", {
    y: -20,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
});

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
});

// gsap.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// });

// gsap.to("#box2", {
//     x: 1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5,
// });

// gsap.to("#box3", {
//     x: 1500,
//     scale: 0.5,
//     duration: 1.5,
//     delay: 4,
//     borderRadius: "50%",
// });
