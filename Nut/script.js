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
 createCanvas(800,700)
 audio = loadSound("assets/nutmp3.mp3");
 score = document.cookie;
 overnut = "Nuts:"
 nut.loadPixels()
 nut3.loadPixels()
 nuts = []
 nuts.push(nut)
 nuts.push(nut2)


}


function draw() {
  background(255, 128, 0)
  image(nut3, 250, 200, 300, 300)
  textSize(35)
  text(score, 190, 31)
  text(overnut, 100, 30)

}


function mousePressed() {
  audio.play();
  score = score + 1
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
  } else {
     user = prompt("Choose a name if you want your progress to be saved:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}