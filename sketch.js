/** @type {SVGImage} */
let lettere_A, lettere_B, lettere_E, lettere_I, lettere_L, lettere_R, lettere_T;

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
  ];
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
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!

  const margine = 30;
  const squares = generateIrregularGrid(
    margine,
    margine,
    width - margine * 2,
    height - margine * 2,
    5,
    5,
    [1, 2],
    10
  );

for (let s of squares) {
  let randomShape = random(forme_svg);

  applyRandomColorToSVG(randomShape); // 添加内部颜色修改
  image(randomShape, s.x, s.y, s.w, s.h);
}

  
   image(lettere_L, 0, 40, 100, 100);
   image(lettere_I, width / 4, 40, 100, 100);
   image(lettere_B, width / 4, height/2-50, 100, 100);
   image(lettere_E, width/2, height/2-50, 100, 100);
   image(lettere_R, width-100, height/2-50, 100, 100);
   image(lettere_T, width/2, height-140, 100, 100);
   image(lettere_A, width-100, height-140, 100, 100);
}

/**
 * @typedef {Object} Square
 * @property {number} x - X position in pixels
 * @property {number} y - Y position in pixels
 * @property {number} w - Width in pixels
 * @property {number} h - Height in pixels
 * @property {number} size - Size in grid units (e.g., 2 means 2x2)
 * @property {{row: number, col: number}} gridPos - Grid position of the square
 */

/**
 * Generate an irregular grid of squares of varying sizes with a constant gap
 *
 * @param {number} x - Top-left x of bounding box
 * @param {number} y - Top-left y of bounding box
 * @param {number} w - Width of bounding box
 * @param {number} h - Height of bounding box
 * @param {number} rows - Number of virtual rows
 * @param {number} cols - Number of virtual columns
 * @param {number[]} sizes - Allowed square sizes (in grid units)
 * @param {number} [gap=0] - Gap between cells (in pixels)
 * @returns {Square[]} Array of placed squares
 */
function generateIrregularGrid(x, y, w, h, rows, cols, sizes, gap = 0) {
  const totalGapW = gap * (cols - 1);
  const totalGapH = gap * (rows - 1);
  const cellW = (w - totalGapW) / cols;
  const cellH = (h - totalGapH) / rows;
  // @ts-ignore
  const grid = Array.from({ length: rows }, () => Array(cols).fill(false));
  const squares = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col]) continue;

      let shuffledSizes = [...sizes].sort(() => Math.random() - 0.5);

      for (let size of shuffledSizes) {
        if (row + size > rows || col + size > cols) continue;

        let canPlace = true;
        for (let r = row; r < row + size; r++) {
          for (let c = col; c < col + size; c++) {
            if (grid[r][c]) {
              canPlace = false;
              break;
            }
          }
          if (!canPlace) break;
        }

        if (canPlace) {
          for (let r = row; r < row + size; r++) {
            for (let c = col; c < col + size; c++) {
              grid[r][c] = true;
            }
          }

          const px = x + col * (cellW + gap);
          const py = y + row * (cellH + gap);
          const pw = cellW * size + gap * (size - 1);
          const ph = cellH * size + gap * (size - 1);

          squares.push({
            x: px,
            y: py,
            w: pw,
            h: ph,
            size,
            gridPos: { row, col },
          });
          break;
        }
      }
    }
  }

  return /** @type {Square[]} */ (squares);
}


//超绝花里胡哨颜色
function randomColorHex() {
  const colors = [
    "#FCC800", // 黄
    "#0B318F", // 蓝
    "#00A29A", // 绿
    "#EB6100", // 橙
    "#66B5E6", // 浅蓝
    "original" // 保留原始颜色
  ];
  return random(colors);
}

function applyRandomColorToSVG(svg) {
  if (!svg || !svg.elt) return;

  const color = randomColorHex(); // 一个整体颜色，包含 "original"

  if (color === "original") return; // 保持原样

  const elements = svg.elt.querySelectorAll("path, rect, circle, polygon, ellipse");

  for (let el of elements) {
    el.setAttribute("fill", color);
  }
}
