var nuts
var nut, nut2, nut3
var audio
var score 
var overnut
var discord 


function preload() {
 nut = loadImage("assets/nut.png")
 nut3 = loadImage("assets/nut3.png")
}


function setup() {
 createCanvas(1920,1080)
 audio = loadSound("assets/nutmp3.mp3");
 score = 0
 overnut = "Nuts:"
 nut.loadPixels()
 nut3.loadPixels()
 nuts = []
 nuts.push(nut)
 nuts.push(nut2)
 discord = "Discord:https://discord.gg/szGRfru"


}


function draw() {
  background(255, 128, 0)
  image(nut3, 900, 500, 300, 300)
  textSize(35)
  text(score, 190, 31)
  text(overnut, 100, 30)
  text(discord, 1425, 973)

}


function mousePressed() {
  audio.play();
  score = score + 1
}
