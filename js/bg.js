const body = document.querySelector("body"),
    h1 = document.querySelector("h1"),
    h4 = document.querySelector("h4");
const IMG_NUMBER = 6;

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.PNG`;
    image.classList.add('bgImage')
    body.prepend(image);
}

function changeFontColor(imgNumber) {
    halfRange = Math.floor(IMG_NUMBER / 2);
    if ( (imgNumber + 1) <= halfRange) {
        h1.classList.add("otherColorFont");
        h4.classList.add("otherColorFont");
    } else {
        h1.classList.remove("otherColorFont");
        h4.classList.remove("otherColorFont");
    }
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    changeFontColor(randomNumber);
}

init();