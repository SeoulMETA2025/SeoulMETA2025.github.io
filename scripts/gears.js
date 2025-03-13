document.addEventListener("DOMContentLoaded", function() {
    const gears = document.querySelectorAll('.gear');
    gears.forEach(gear => {
        let angle = 0;
        setInterval(() => {
            angle = (angle + 1) % 360;
            gear.style.transform = `rotate(${angle}deg)`;
        }, 100);
    });
});
