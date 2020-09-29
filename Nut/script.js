var nuts
var nut, nut2, nut3
var audio
var score 
var overnut


function preload() {
 nut = loadImage("assets/nut.png")
 nut3 = loadImage("assets/nut3.png")
}


function setup() {
 createCanvas(1436,707)
 audio = loadSound("assets/nutmp3.mp3");
 score = 0
 overnut = "Nuts:"
 nut.loadPixels()
 nut3.loadPixels()
 nuts = []
 nuts.push(nut)
 nuts.push(nut2)


}


function draw() {
  background(255, 128, 0)
  image(nut3, 250, 200, 600, 600)
  textSize(35)
  text(score, 190, 31)
  text(overnut, 100, 30)

}


function mousePressed() {
  audio.play();
  score = score + 1
}
