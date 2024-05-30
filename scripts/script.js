const body = document.querySelector("body");
const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
        let name = `cell${i}${j}`;
        const div = document.createElement("div");
        div.setAttribute("id", name);
        div.textContent = name;
        container.appendChild(div);
    }
}

body.appendChild(container);



