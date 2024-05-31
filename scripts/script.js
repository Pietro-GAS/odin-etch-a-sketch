const body = document.querySelector("body");
const commands = document.querySelector(".commands")
const container = document.querySelector(".container");
let bckgrColor;

const btnNew = document.createElement("button");
btnNew.setAttribute("class", "button-new");
btnNew.textContent = "New Sketchpad";

const btnErase = document.createElement("button");
btnErase.setAttribute("class", "button-erase");
btnErase.textContent = "Clear All";

const btnBlack = document.createElement("button");
btnBlack.setAttribute("class", "button-black");
btnBlack.textContent = "Black";

const btnRainbow = document.createElement("button");
btnRainbow.setAttribute("class", "button-rainbow");
btnRainbow.textContent = "Rainbow";

commands.appendChild(btnNew);
commands.appendChild(btnBlack);
commands.appendChild(btnRainbow);
commands.appendChild(btnErase);

btnNew.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        let id = row.getAttribute("id");
        const cells = document.querySelectorAll(id);
        cells.forEach((cell) => {
            row.removeChild(cell);
        });
        container.removeChild(row);
    });
    let rowNum = prompt("How many rows? (Min: 1, Max: 100)");
    if (rowNum <= 0) {
        rowNum = prompt("Please select a positive number of rows.");
    } else if (rowNum > 100) {
        rowNum = prompt("Please select a number lower than 100.")
    }
    generateGrid(rowNum);
});

btnBlack.addEventListener("click", () => {
    btnRainbow.removeAttribute("disabled");
    bckgrColor = "black";
    const hovered = document.querySelectorAll(".hovered");
    hovered.forEach((cell) => {
        cell.style.backgroundColor = bckgrColor;
    });
    btnBlack.setAttribute("disabled", "disabled");
});

btnRainbow.addEventListener("click", () => {
    btnBlack.removeAttribute("disabled");
    bckgrColor = "red";
    const hovered = document.querySelectorAll(".hovered");
    hovered.forEach((cell) => {
        cell.style.backgroundColor = bckgrColor;
    });
    btnRainbow.setAttribute("disabled", "disabled");
});

btnErase.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
        cell.className = "cell";
    });
});

function generateGrid(rowNum) {
    bckgrColor = "black";
    btnBlack.setAttribute("disabled", "disabled");
    btnRainbow.removeAttribute("disabled");
    for (let i = 1; i <= rowNum; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("id", `row${i}`);
        container.appendChild(row);
        for (let j = 1; j <= rowNum; j++) {
            //let name = `${i}-${j}`;
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.setAttribute("id", `row${i}`);
            //cell.textContent = name;
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = bckgrColor;
            cell.classList.add("hovered");
        });
        /*
        cell.addEventListener("mouseleave", () => {
            cell.classList.remove("hovered");
            cell.classList.add("trail");
        });
        */
    });
}

body.appendChild(commands);
body.appendChild(container);

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
});



