// UTILS
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// GRID 
const grid = function() {
  const LINE_SIZE = 3;
  const possibleValues = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const grid = [LINE_SIZE][LINE_SIZE];
  
  const init = () => {
    for (const i = 0; i <= LINE_SIZE; i++) {
      for (const j = 0; j <= LINE_SIZE; j++) {
        const rand = getRandom(possibleValues[0], possibleValues[possibleValues.length - 1]);
        grid[i][j] = rand;
      }
    }
    return grid;
  }
}


const game = grid();
game.init();

// DISPLAY
const graphics = function() {
  const showGrid = () => {
    console.log(game.grid)
  }
}

graphics().showGrid();