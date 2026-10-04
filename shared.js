/// takes in an array of asset names
function randomizeHero(accessoryImages) {
    const element = document.getElementById("hero-accessory");
    const randomAccessory = accessoryImages[
        Math.floor(Math.random() * accessoryImages.length)
    ];

    element.src = `../assets/${randomAccessory}`;
}