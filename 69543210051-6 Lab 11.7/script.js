let buffer = "";
let size = 8;

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= i; j++) {
        buffer += j;
    }
    buffer += "\n";
}

document.getElementById("output").textContent = buffer;

console.log("=== Console Output ===");
console.log(buffer);