const body = document.querySelector("body"),
    clock = document.querySelector("h1"),
    userName = document.querySelector(".js-greetings"),
    weatherSpan = document.querySelector(".js-weather");

const IMG_NUMBER = 8;

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.PNG`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function changeFontColor(imgNumber) {
    halfRange = Math.floor(IMG_NUMBER / 2);
    if ( (imgNumber) <= halfRange - 1) {
        clock.classList.add("otherColorFont");
        userName.classList.add("otherColorFont");
        weatherSpan.classList.add("otherColorFont");
    } else {
        clock.classList.remove("otherColorFont");
        userName.classList.remove("otherColorFont");
        weatherSpan.classList.remove("otherColorFont");
    }
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    changeFontColor(randomNumber);
}

init();