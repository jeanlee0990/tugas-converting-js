function convertGrade() {
    let nilai = prompt("Masukkan nilai (0 - 100):");
    
    nilai = parseInt(nilai);

    let grade;

    if (nilai >= 80 && nilai <= 100) {
        grade = "A";
    } else if (nilai >= 60 && nilai <= 70) {
        grade = "B";
    } else if (nilai >= 40 && nilai <= 50) {
        grade = "C";
    } else if (nilai >= 20 && nilai <= 30) {
        grade = "D";
    } else if (nilai == 10) {
        grade = "E";
    } else {
        grade = "Nilai tidak valid";
    }

    alert("Nilai huruf Anda adalah: " + grade);
}

convertGrade();
