const body = document.querySelector("body"),
    clock = document.querySelector("h1"),
    userName = document.querySelector(".js-greetings"),
    weatherSpan = document.querySelector(".js-weather");

const IMG_NUMBER = 9;

function getHours() {
    let time = getTime();
    return time;
}

function paintImage(time) {
    const day = (IMG_NUMBER / 3),
        night = IMG_NUMBER,
        afternoon = day * 2,
        afternoonBegin =  afternoon - 2,
        afternoonEnd =  afternoon + 1;
    const image = new Image();
    
    if (time > 7 && time < 16) {
        imgNumber = Math.round(Math.random() *  (day - 1)) + 1;
        image.src = `images/${imgNumber}.PNG`;
        image.classList.add('bgImage');
        body.prepend(image);
    } else if (time >= 16 && time < 19) {
        imgNumber = Math.round(Math.random() * (afternoon - afternoonBegin)) + afternoonBegin;
        image.src = `images/${imgNumber}.PNG`;
        image.classList.add('bgImage');
        body.prepend(image);
    } else {
        imgNumber = Math.round(Math.random() * (night - afternoonEnd)) + afternoonEnd;
        image.src = `images/${imgNumber}.PNG`;
        image.classList.add('bgImage');
        body.prepend(image);
    }
}

function changeFontColor(time) {
    if (time > 7 && time < 16) {
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
    const number = getHours();
    paintImage(number);
    changeFontColor(number);
}

init();