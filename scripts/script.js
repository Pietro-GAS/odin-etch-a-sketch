const body = document.querySelector("body");
const container = document.querySelector("#container");

const btnNew = document.createElement("button");
btnNew.setAttribute("class", "button-new");
btnNew.textContent = "New Sketchpad";

body.appendChild(btnNew);
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
    let rowNum = prompt("How many rows?");
    generateGrid(rowNum);
});

function generateGrid(rowNum) {
    for (let i = 1; i <= rowNum; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        row.setAttribute("id", `row${i}`);
        container.appendChild(row);
        for (let j = 1; j <= rowNum; j++) {
            let name = `cell${i}${j}`;
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.setAttribute("id", `row${i}`);
            cell.textContent = name;
            row.appendChild(cell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hovered");
        });
        cell.addEventListener("mouseleave", () => {
            cell.classList.remove("hovered");
        });
    });
}

//generateGrid(16);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hovered");
    });
    cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hovered");
    });
});

body.appendChild(container);

document.addEventListener("DOMContentLoaded", () => {
    generateGrid(16);
});



