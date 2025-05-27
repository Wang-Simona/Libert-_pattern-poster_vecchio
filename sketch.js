/** @type {SVGImage[]} */
let lettere_svg = [];
 
/** @type {SVGImage[]} */
let forme_svg = [];

function preload() {
  forme_svg = [
    loadSVG("./Svgs/shapes/1.svg"),
    loadSVG("./Svgs/shapes/2.svg"),
    loadSVG("./Svgs/shapes/3.svg"),
    loadSVG("./Svgs/shapes/4.svg"),
    loadSVG("./Svgs/shapes/5.svg"),
    loadSVG("./Svgs/shapes/6.svg"),
    loadSVG("./Svgs/shapes/7.svg"),
    loadSVG("./Svgs/shapes/8.svg"),
    loadSVG("./Svgs/shapes/9.svg"),
    loadSVG("./Svgs/shapes/10.svg"),
    loadSVG("./Svgs/shapes/11.svg"),
    loadSVG("./Svgs/shapes/12.svg"),
    loadSVG("./Svgs/shapes/13.svg"),
    loadSVG("./Svgs/shapes/14.svg"),
    loadSVG("./Svgs/shapes/15.svg"),
  ]
   lettere_svg = [
    loadSVG("./Svgs/letters/字母à.svg"),
    loadSVG("./Svgs/letters/字母B.svg"),
    loadSVG("./Svgs/letters/字母E.svg"),
    loadSVG("./Svgs/letters/字母I.svg"),
    loadSVG("./Svgs/letters/字母L.svg"),
    loadSVG("./Svgs/letters/字母R.svg"),
    loadSVG("./Svgs/letters/字母T.svg"),
  ]
}


function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  imageMode(CENTER)
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
  
  let randomsfondo = random (forme_svg);
 

  fillSVG(randomsfondo,"red");
  image(randomsfondo, width/2,height/2, 100, 100);

  let randominmezzo = random(lettere_svg);
  fillSVG(randominmezzo,"green");
  image(randominmezzo, width/2,height/2, 100, 100);

}
