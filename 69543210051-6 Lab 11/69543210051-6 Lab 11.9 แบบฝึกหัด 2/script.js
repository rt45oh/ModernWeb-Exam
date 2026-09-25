function checkGrade() {
    let score = Math.floor(Math.random() * 101);
    
    let grade = "";
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let status = "";
    if (score >= 50) {
        status = "ผ่าน";
    } else {
        status = "ไม่ผ่าน";
    }

    let description = "";
    switch (grade) {
        case "A":
            description = "ยอดเยี่ยมมาก!";
            break;
        case "B":
            description = "ดีมาก รักษามาตรฐานไว้";
            break;
        case "C":
            description = "ผ่านเกณฑ์ระดับดี";
            break;
        case "D":
            description = "พอใช้ แต่ควรพัฒนาเพิ่ม";
            break;
        case "F":
            description = "ต้องลงทะเบียนเรียนใหม่";
            break;
    }

    let resultText = `คะแนนที่สุ่มได้: ${score}\nเกรด: ${grade}\nผลสอบ: ${status}\nคำอธิบาย: ${description}`;
    document.getElementById("outputBox").textContent = resultText;
    
    console.clear();
    console.log("คะแนน: " + score);
    console.log("เกรด: " + grade);
    console.log("ผลสอบ: " + status);
    console.log("คำอธิบาย: " + description);
}