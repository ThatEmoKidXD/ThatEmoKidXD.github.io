let grid;
let dice1, dice2;
let currentSquareIndex = 0;

function setup() {
  createCanvas(600, 600);
  grid = createGrid(24, 24); // Create a 24x24 grid
  dice1 = new Die(6); // Both dice are six-sided
  dice2 = new Die(6);
}

function draw() {
  background(255);
  fillNextSquare();
  drawGrid();
}

function fillNextSquare() {
  if (currentSquareIndex < grid.length) {
    let square = grid[currentSquareIndex];
    let outcome1 = dice1.roll();
    let outcome2 = dice2.roll();

    switch (outcome1) { // Check outcome of first die
      case 1:
        currentSquareIndex += 4;
        break;
      default:
        currentSquareIndex++;
        break;
    }

    switch (outcome2) { // Check outcome of second die
      case 1:
        square.filled = true;
        break;
      case 2:
        square.fillTopHalf();
        break;
      case 3:
        square.fillBottomHalf();
        break;
      case 4:
        square.fillLeftHalf();
        break;
      case 5:
        square.fillRightHalf();
        break;
      case 6:
        square.setOutline();
        break;
    }
  }
}

function drawGrid() {
  let squareSize = width / 24;
  for (let i = 0; i < grid.length; i++) {
    let square = grid[i];
    if (square.filled) {
      fill(0);
      noStroke();
      rect(square.x * squareSize, square.y * squareSize, squareSize, squareSize);
    } else if (square.halfFilled) {
      fill(0);
      noStroke();
      if (square.topHalf) {
        rect(square.x * squareSize, square.y * squareSize, squareSize, squareSize / 2);
      }
      if (square.bottomHalf) {
        rect(square.x * squareSize, square.y * squareSize + squareSize / 2, squareSize, squareSize / 2);
      }
      if (square.leftHalf) {
        rect(square.x * squareSize, square.y * squareSize, squareSize / 2, squareSize);
      }
      if (square.rightHalf) {
        rect(square.x * squareSize + squareSize / 2, square.y * squareSize, squareSize / 2, squareSize);
      }
    } else if (square.outlined) {
      noFill();
      stroke(0);
      rect(square.x * squareSize, square.y * squareSize, squareSize, squareSize);
    }
  }
}

function createGrid(rows, cols) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      grid.push(new Square(x, y));
    }
  }
  return grid;
}

class Square {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.filled = false;
    this.halfFilled = false;
    this.outlined = false;
    this.topHalf = false;
    this.bottomHalf = false;
    this.leftHalf = false;
    this.rightHalf = false;
  }

  fillTopHalf() {
    this.halfFilled = true;
    this.topHalf = true;
  }

  fillBottomHalf() {
    this.halfFilled = true;
    this.bottomHalf = true;
  }

  fillLeftHalf() {
    this.halfFilled = true;
    this.leftHalf = true;
  }

  fillRightHalf() {
    this.halfFilled = true;
    this.rightHalf = true;
  }

  setOutline() {
    this.outlined = true;
  }
}

class Die {
  constructor(sides) {
    this.sides = sides;
  }

  roll() {
    return Math.floor(random(1, this.sides + 1));
  }
}





