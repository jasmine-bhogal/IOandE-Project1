let url = 'https://io.adafruit.com/api/v2/jasmine_bhogal/feeds/button';
let counter = 0;
let change = 1;
let data = 0;
let raleway;
let t = "YOU'RE FUNNY — SOMETIMES.";


function preload() {
    raleway = loadFont('assets/Raleway-Bold.ttf')
}
//
//function setup() {
//    createCanvas(255, 255);
//}
//
//function draw() {
//    fill(255, 10);
//    rect(0, 0, width, height);
//    if (counter % 80 == 0) {
//        getData();
//    }
//    counter++;
//}
//
//function getData() {
//    let data;
//    httpGet(url, 'json', function (response) {
//        console.log(response);
//        data = response.last_value;
////        let resize = map(data, 1, 0, 25, 150);
////        noStroke();
////        fill(255, 0, 0);
////        ellipse(width / 2, height / 2, resize);
////        console.log(data);
//    });
//}


//confetti/gravity/physics adapted from https://editor.p5js.org/slow_izzm/sketches/H1fhGJSaX
//special thanks to assistance from Michael Brzuchalski

let confettiColor = [],
    confetti = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(raleway);
    textSize(windowWidth / 18);
    strokeWeight(700);
    //    textStyle(BOLD);
    textAlign(CENTER, CENTER);



    //    confettiColor = [color('#fffaf8'), color('#fffaf8'), color('#fffaf8')];
    confettiColor = [color(255, 250, 248, 0), color(255, 250, 248, 0), color(255, 250, 248, 0)];
    for (let i = 0; i < 100; i++) {
        confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
}

function draw() {
    background(255, 250, 248);
    text(t, windowWidth / 4, windowWidth / 8, windowWidth / 2, windowHeight / 2);




    if (counter % 80 == 0) {
        getData();
    }
    counter++;

    if (data == 1) {
        confettiColor = [color(255, 250, 248, 0), color(255, 250, 248, 0), color(255, 250, 248, 0), ];
    } else {
        confettiColor = [color(251, 203, 188, 240), color(182, 194, 227, 240), color(234, 129, 137, 240)];
    }
    for (let i = 0; i < confetti.length / 2; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
            confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
    }

    for (let i = int(confetti.length / 2); i < confetti.length; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
            confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
    }

}


function getData() {
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        let resize = map(data, 0, 1, 1, 1);
        change = resize;
        console.log(data);
    });
}
