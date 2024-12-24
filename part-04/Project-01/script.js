var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out",
    });
});

imageDiv.addEventListener("mouseenter", function () {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 4,
        duration: 0.5,
        ease: "back.out",
        backgroundColor: "#ffffff8a",
    });
});

imageDiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        duration: 0.5,
        ease: "back.out",
        backgroundColor: "#fff",
    });
});
