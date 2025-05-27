/** @type {SVGImage} */
let lettere_A,lettere_B,lettere_E,lettere_I,lettere_L,lettere_R,lettere_T;
 
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
   lettere_A = loadSVG("./Svgs/letters/字母à.svg");
   lettere_B = loadSVG("./Svgs/letters/字母B.svg");
   lettere_E = loadSVG("./Svgs/letters/字母E.svg");
   lettere_I = loadSVG("./Svgs/letters/字母I.svg");
   lettere_L = loadSVG("./Svgs/letters/字母L.svg");
   lettere_R = loadSVG("./Svgs/letters/字母R.svg");
   lettere_T = loadSVG("./Svgs/letters/字母T.svg");
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
  image(randomsfondo, 50,50, 100, 100);
  image(randomsfondo, width-50,50, 100, 100);
  image(randomsfondo, width/2,height/2, 100, 100);
  image(randomsfondo, 50,height-50, 100, 100);
  image(randomsfondo, width-50,height-50, 100, 100);

  //let randomsopra = lettere_A,lettere_B,lettere_E,lettere_I,lettere_L,lettere_R,lettere_T;
  //fillSVG(randomsopra,"green");
  image(lettere_L, width/4-50,height/3-60, 100, 100);
  image(lettere_I, width/4+50,height/3-60, 100, 100);
  image(lettere_B, width/4+50,height/2, 100, 100);
  image(lettere_E, width/4+150,height/2, 100, 100);
  image(lettere_R, width/4+250,height/2, 100, 100);
  image(lettere_T, width/4+150,height-60, 100, 100);
  image(lettere_A, width/4+250,height-60, 100, 100);
}
