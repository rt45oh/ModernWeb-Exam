function checkGrade() {
    let score = 98;
    
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

    let result = `คะแนนที่สุ่มได้: ${score}\nเกรด: ${grade}\nผลสอบ: ${status}`;

    document.getElementById("output").textContent = result;
    
    console.clear();
    console.log(result);
}