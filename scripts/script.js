const body = document.querySelector("body");
const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("id", "row");
    container.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        let name = `cell${i}${j}`;
        const cell = document.createElement("div");
        cell.setAttribute("id", "cell");
        cell.textContent = name;
        row.appendChild(cell);
    }
}

body.appendChild(container);



