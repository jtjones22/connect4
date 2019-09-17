let currentPlayer = "red" // "red" "black"

// "red" "black" null
let board = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ]
]

function addDiskToBoard (color, boardToUpdate, selectedColumn) {

    return updatedBoard
}

function displayBoardInHTML (boardToDisplay) {

    // nothing to return
}

function checkForEndingCondition (boardToCheck) {
    // ending conditions: "red win", "black win", "tie", "" (keep playing)
    return condition
}

function showMessage () {
    // Tell the user if someone has won or there is a tie
}

function togglePlayer (color) {
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
    