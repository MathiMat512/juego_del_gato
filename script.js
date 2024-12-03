let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cell) {
    const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[cellIndex] === "" && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);
        checkWinner();
        togglePlayer();
    }
}

function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            document.querySelector(".message").textContent = `${gameBoard[a]} ha ganado`;
        }
    }

    if (!gameBoard.includes("") && gameActive) {
        gameActive = false;
        document.querySelector(".message").textContent = "Empate!";
    }
}

function resetGame() {
    currentPlayer = "X";
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.textContent = "";
        cell.classList.remove("X", "O");
    });
    document.querySelector(".message").textContent = "";
}

resetGame();
