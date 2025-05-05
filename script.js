const boardSize = 5;
const board = [];

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    for (let row = 0; row < boardSize; row++) {
        board[row] = [];
        for (let col = 0; col < boardSize; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;
            square.addEventListener('click', () => handleClick(row, col));
            gameBoard.appendChild(square);
            board[row][col] = square;
        }
    }
}

function toggle(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        board[row][col].classList.toggle('is-off');
    }
}

function handleClick(row, col) {
    toggle(row, col);
    toggle(row - 1, col);
    toggle(row + 1, col);
    toggle(row, col - 1);
    toggle(row, col + 1);
    checkWin();
}

function checkWin() {
    const isWin = board.flat().every(square => !square.classList.contains('is-off'));
    if (isWin) {
        window.alert('You win!');
    }
}

function randomizeBoard(moves = 10) {
    for (let i = 0; i < moves; i++) {
        const r = Math.floor(Math.random() * boardSize);
        const c = Math.floor(Math.random() * boardSize);
        handleClick(r, c);
    }
}

createBoard();
randomizeBoard(15); // 15 random simulated clicks
