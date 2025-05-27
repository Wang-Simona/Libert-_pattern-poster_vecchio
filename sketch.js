/** @type {SVGImage[]} */
let lettere_svg = [];
 
/** @type {SVGImage[]} */
let forme_svg = [];

function preload() {
  lettere_svg = [
    loadSVG("./Svgs/shapes/1.svg")
    loadSVG("./Svgs/shapes/6.svg")
    loadSVG("./Svgs/shapes/11.svg")
    loadSVG("./Svgs/shapes/16.svg")
    loadSVG("./Svgs/shapes/21.svg")
    loadSVG("./Svgs/shapes/26.svg")
    loadSVG("./Svgs/shapes/31.svg")
    loadSVG("./Svgs/shapes/36.svg")
    loadSVG("./Svgs/shapes/41.svg")
    loadSVG("./Svgs/shapes/46.svg")
    loadSVG("./Svgs/shapes/51.svg")
    loadSVG("./Svgs/shapes/56.svg")
    loadSVG("./Svgs/shapes/61.svg")
    loadSVG("./Svgs/shapes/66.svg")
    loadSVG("./Svgs/shapes/71.svg")
    
  ]
}

function preload() {
  forme_svg = [
    loadSVG("./Svgs/letters/字母à.svg")
    loadSVG("./Svgs/letters/字母B.svg")
    loadSVG("./Svgs/letters/字母E.svg")
    loadSVG("./Svgs/letters/字母I.svg")
    loadSVG("./Svgs/letters/字母L.svg")
    loadSVG("./Svgs/letters/字母R.svg")
    loadSVG("./Svgs/letters/字母T.svg")
  ]
}

function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();


  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
}
