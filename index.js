let currectElem = "X";
let array = Array(9).fill(null);

function toggle() {
    currectElem = currectElem === "X" ? "O" : "X";
    return currectElem;
}

function checkWinner(board) {
    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; 
        }
    }

    if (!board.includes(null)) {
        return "Draw";
    }

    return null;
}

document.querySelectorAll('.col').forEach(div => {
    div.addEventListener('click', (e) => {
        let id = parseInt(e.target.id);

        if (array[id]) return;

        array[id] = currectElem;
        e.target.textContent = currectElem;

        let winner = checkWinner(array);
        if (winner) {
            setTimeout(() => {
                alert(winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`);
            }, 100);
        } else {
            toggle();
        }
    });
});
