let out = "";

let fruits = ["Apple", "Banana", "Orange", "Grape", "Lemon"];
out += "List of fruits\n";
console.log("List of fruits");

for (let i = 0; i < fruits.length; i++) {
    out += `${i + 1}. ${fruits[i]}\n`;
    console.log("%d. %s", i + 1, fruits[i]);
}

out += "\nList of programming languages (reversed)\n";
console.log("List of programming languages (reversed)");

let languages = ["GO", "JavaScript", "PHP", "Python", "Ruby"];
let count = 1;

for (let i = languages.length - 1; i >= 0; i--) {
    out += `${count}. ${languages[i]}\n`;
    console.log("%d. %s", count, languages[i]);
    count++;
}

document.getElementById("output").textContent = out;