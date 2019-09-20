let currentPlayer = "red" // "red" "black"
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;
let currentPlayerWins
let horizontalWin 
let verticalWin 
let diagonalWinRight
let diagonalWinLeft
let tie
let continuePlaying

// "red" "black" null
// let board = [
//     [ null, null, null, null, null, null, null ],
//     [ null, null, null, null, null, null, null ],
//     [ null, null, null, null, null, null, null ],
//     [ null, null, null, null, null, null, null ],
//     [ null, null, null, null, null, null, null ],
//     [ null, null, null, null, null, null, null ]
// ]

function createGameboard(){
    board = [];
    for(let i=0; i<6; i++){
      board[i] = [];
      for(let j=0; j<7; j++){
        board[i].push(null);
      }
    }
  }
console.log[(createGameboard())]
// This function will create a disk based on the currentPlayer variable setting.
function createDisk() {
    if(currentPlayer === 'red') {
    let diskA = document.createElement('div');
    diskA.classList.add('diskA');
    } else {
        let diskB = document.createElement('div');
        diskB.classList.add('diskB');
    }
}
createDisk();

// This function will add disk to column using data-col from html.
function addDiskToBoard (color, boardToUpdate, selectedColumn) {
    // let square = document.getElementById('0-0');
    // square.appendChild(diskA);
    return updatedBoard
}

function displayBoardInHTML (boardToDisplay) {

    // nothing to return
}

function checkForEndingCondition (boardToCheck) {
    function horizontalWinCheck(boardToCheck) {
        for(let y = 0; y < board.length; y++){
            for(let x = 0; x < edgeX; x++) {
              let cell = board[y][x];
              if(cell !== null) {
                if(cell === board[y][x+1] && cell === board[y][x+2] && cell === board[y][x+3] ) {
                    console.log('You won!');
                    horizontalWin = true;
                    return horizontalWin
                }
              }
            }
          }
        return false
    }
    console.log(horizontalWinCheck(board));
    
    function verticalWinCheck(boardToCheck) {
        for (let y = 0; y < edgeY; y++) {
            for (let x = 0; x < board[0].length; x++) {
                cell = board[y][x];
                if (cell !== null) {
                    if (cell === board[y+1][x] && cell === board[y+2][x] && cell === board[y+3][x]) {
                        console.log('You won vertically!');
                        verticalWin = true;
                        return verticalWin
                    }
                }
            }
        }
        return false
    }
    console.log(verticalWinCheck(board));
    
    function diagonalLeftWinCheck(boardToCheck) { 
        for (let y = 0; y < edgeY; y++) {
            for (let x = 0; x < edgeX; x++) {
                cell = board[y][x];
                if (cell !== null) {
                    if (cell === board[y+1][x+1] && cell === board[y+2][x+2] && cell === board[y+3][x+3]) {
                        console.log('You won diagonally to the Left!')
                        diagonalWinLeft = true;
                        return diagonalWinLeft
                    }
                }
            }
        }
        return false
    }
    console.log(diagonalLeftWinCheck(board));
    
    function diagonalRightWinCheck(boardToCheck) { 
        for (let y = 3; y < board.length; y++) {
            for (let x = 0; x < edgeX; x++) {
                cell = board[y][x];
                if (cell !== null) {
                    if (cell === board[y-1][x+1] && cell === board[y-2][x+2] && cell === board[y-3][x+3]) {
                        console.log('You won diagonally to the Right!')
                        diagonalWinRight = true;
                        return diagonalWinRight
                    }
                }
            }
        }
        return false
    }
    console.log(diagonalRightWinCheck(board));

    function tieCheck(boardToCheck) {
        let emptySpace = "unavailable"
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < edgeX; x++) {
                cell = board[y][x]
                if(cell === null){
                    emptySpace = "available"
                    tie = false
                    return false
                }
            }
        }
        if(emptySpace === "unavailable" && horizontalWin !== true && verticalWin !== true && diagonalWinRight !== true && diagonalWinLeft !== true){
        tie = true
        return tie;
        }
    }
    console.log(tieCheck(board));
    
    
    if (tie === true) {
        return condition = tie
    }
    else if (horizontalWin === true || verticalWin === true || diagonalWinRight === true || diagonalWinLeft === true) {

        return condition =  currentPlayerWins + " wins"
    }
    else {
        return condition = "continuePlaying"
    }
    
}
console.log(checkForEndingCondition(board));

function showMessage () {
    // Tell the user if someone has won or there is a tie
}

function togglePlayer (color) {
    let newColor
    return newColor
}

function columnClickHandler (evt) {
    // figure out what column was clicked
    let clickedColumn = evt.target.dataset.col
    if (clickedColumn === undefined) {
        return
    }

    board = addDiskToBoard(currentPlayer, board, clickedColumn)
    displayBoardInHTML(board)
    let condition = checkForEndingCondition(board)
    // "red win", "black win", "tie", ""
    if (condition !== "") {
        showMessage(condition)
    } else {
        currentPlayer = togglePlayer(currentPlayer)
    }
}


// Set a click handler function for each column that adds an additional disc.
//     Take turns! Toggle the color of each successive disc added.
//     Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
//     Once a column is full (has 6 discs), don't allow any more discs to be added.
//     Check whether the last disc added completed a four-in-a-row within the column (vertically).
//     Check whether the last disc added completed four-in-a-row horizontally.
//     Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal. -->
