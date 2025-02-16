const eventButton = document.getElementsByClassName("eventButton")[0];
const maxButtonShadow = 3;
let buttonShadow = 0;

// mouse auto scroll
eventButton.onclick = function scrollToEvent() {
    const steamSection = document.querySelector(".bigContentGrid.skyBlueBackground");
    const steamSectionTop = steamSection.offsetTop;

    window.scrollTo({
        top: steamSectionTop,
        left: 0,
        behavior: "smooth"
    });
}
