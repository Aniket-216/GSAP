function breakTheText() {
    var h1 = document.querySelector("h1");

    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var halfValue = splittedText.length / 2;

    var clutter = "";

    splittedText.forEach(function (elem, index) {
        if (index < halfValue) {
            clutter += `<span class="left">${elem}</span>`;
        } else {
            clutter += `<span class="right">${elem}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .left", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.2,
});

gsap.from("h1 .right", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.2,
});
