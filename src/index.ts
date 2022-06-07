/// <reference path="../node_modules/@types/p5/global.d.ts" />
/// <reference path="../node_modules/@types/p5/constants.d.ts" />

import p5 from "p5";

const HEIGHT = 800;
const WIDTH = HEIGHT;


function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  background(220);
}

new p5(false as unknown as ((p5: p5) => void), document.body);
window['setup'] = setup;
window['draw'] = draw;