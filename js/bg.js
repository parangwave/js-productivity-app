const body = document.querySelector("body"),
    h1 = document.querySelector("h1"),
    h4 = document.querySelector("h4"),
    li = document.querySelector("li"),
    btn = document.querySelector("button");

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
    if ( (imgNumber + 1) < 5) {
        h1.classList.remove("nightFont");
        h4.classList.remove("nightFont");
        li.classList.remove("nightFont");
        btn.classList.remove("nightFont");
    } else {
        h1.classList.add("nightFont");
        h4.classList.add("nightFont");
        li.classList.add("nightFont");
        btn.classList.add("nightFont");
    }
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
    changeFontColor(randomNumber);
}

init();