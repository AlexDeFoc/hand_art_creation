document.addEventListener("DOMContentLoaded", () => {
    let hero_box = document.getElementById("hero");

    let i = 0;
    let imgCount = 9;

    setInterval(() => {
        let url = "../images/hero_";
        let currentImageIndex = (i % imgCount) + 1;
        let imageUrl = url + currentImageIndex.toString() + ".jpg";

        hero_box.classList.add('fade-out');

        setTimeout(() => {
            hero_box.style.setProperty('--hero-background', `url(${imageUrl})`);
            hero_box.classList.remove('fade-out');
        }, 300);

        i++;
    }, 2000);
});
