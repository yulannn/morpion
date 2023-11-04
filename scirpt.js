const cells = document.getElementsByTagName("td");
let currentPlayer = "X";

const result = document.getElementById("result");

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];

    cell.addEventListener("click", () => {
        if (cell.innerHTML === "") {
            cell.innerHTML = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            check();
        }
    });
}

function check() {
    const cell1 = document.getElementById("top-left");
    const contentCell1 = cell1.textContent;

    const cell2 = document.getElementById("top-mid");
    const contentCell2 = cell2.textContent;

    const cell3 = document.getElementById("top-right");
    const contentCell3 = cell3.textContent;

    const cell4 = document.getElementById("mid-left");
    const contentCell4 = cell4.textContent;

    const cell5 = document.getElementById("mid-mid");
    const contentCell5 = cell5.textContent;

    const cell6 = document.getElementById("mid-right");
    const contentCell6 = cell6.textContent;

    const cell7 = document.getElementById("bottom-left");
    const contentCell7 = cell7.textContent;

    const cell8 = document.getElementById("bottom-mid");
    const contentCell8 = cell8.textContent;

    const cell9 = document.getElementById("bottom-right");
    const contentCell9 = cell9.textContent;

    if (contentCell1 === "X" && contentCell2 === "X" && contentCell3 === "X") {
        result.innerHTML = "X a gagné";    
    } else if (contentCell1 === "X" && contentCell4 === "X" && contentCell7 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell1 === "X" && contentCell5 === "X" && contentCell9 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell2 === "X" && contentCell5 === "X" && contentCell8 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell3 === "X" && contentCell6 === "X" && contentCell9 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell4 === "X" && contentCell5 === "X" && contentCell6 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell7 === "X" && contentCell8 === "X" && contentCell9 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell3 === "X" && contentCell5 === "X" && contentCell7 === "X") {
        result.innerHTML = "X a gagné";
    } else if (contentCell1 === "O" && contentCell2 === "O" && contentCell3 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell1 === "O" && contentCell4 === "O" && contentCell7 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell1 === "O" && contentCell5 === "O" && contentCell9 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell2 === "O" && contentCell5 === "O" && contentCell8 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell3 === "O" && contentCell6 === "O" && contentCell9 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell4 === "O" && contentCell5 === "O" && contentCell6 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell7 === "O" && contentCell8 === "O" && contentCell9 === "O") {
        result.innerHTML = "O a gagné";
    } else if (contentCell3 === "O" && contentCell5 === "O" && contentCell7 === "O") {
        result.innerHTML = "O a gagné";
    }
}
