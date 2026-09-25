function runLoopPractice() {
    let maxNumber = 10;
    let resultText = "";

    console.clear();

    for (let i = 0; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            resultText += i + " (คู่)\n";
            console.log(i + " (คู่)");
        } else {
            resultText += i + " (คี่)\n";
            console.log(i + " (คี่)");
        }
    }

    for (let i = 0; i <= maxNumber; i += 2) {
        resultText += "นับทีละ 2: " + i + "\n";
        console.log("นับทีละ 2: " + i);
    }

    for (let i = 10; i >= 0; i--) {
        resultText += "ถอยหลัง: " + i + "\n";
        console.log("ถอยหลัง: " + i);
    }

    document.getElementById("output").textContent = resultText.trim();
}