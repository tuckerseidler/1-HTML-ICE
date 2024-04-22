
let img1;
let img2;
let img3;
let img4;
let s;

function preload(){
    img1 = loadImage('Resources/media/copyimage.png');
    img2 = loadImage('Resources/media/copyimg.png');
    img3 = loadImage('Resources/media/gun.png');
    
}

function setup() {
  createCanvas(1000,1000);
  colorMode(HSB);
  imageMode(CENTER);
  noCursor();

}

function draw() {
  background(0);
image(img1, width/2,height/2);
image(img2, mouseX, mouseY, 200, 200);
stroke(63,58,250,100);
}