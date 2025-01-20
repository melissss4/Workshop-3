
//let images;

//function preload () {
 // images = loadImage('Images1/2.jpeg') //grabs image from file


//function setup () {
 // createCanvas(800, 500);
 // background(0);


//function draw() {
//  let x = random(images.width);
//  let y = random(images.height);
//  let c = images.get(int(x), int(y));
//  fill(c);
//  noStroke();
 // circle(x,y,60); //how big the circles are(will determine how quickly the image is made)


let stars;
let moon;
function preload () {
  moon= loadImage('Images1/2.jpeg');
    stars= loadImage('Images1/3.jpeg');
 
}

function setup () {
  createCanvas(5000, 5000);
  background(0);
}

function draw() {
  for(let i = 0; i <10; i++){
      drawImage(stars);
      drawImage(moon, stars.width);    
  }
}

function drawImage(_image, _imageX = 0, _imageY = 0)
{
  print(_image.width); // to tell howbig the pic isso i can resize my canvas
  print(_image.height); // to tell howbig the pic isso i can resize my canvas
  let x = random(_image.width);
  let y = random(_image.height);
  let c = _image.get(int(x), int(y));
  fill(c);
  noStroke();
  
  circle(x+_imageX,y+_imageY,10);
}
