
let calc = document.getElementById('calculate');

let result = document.getElementById('result');

calc.addEventListener('click', calculategrade);

function calculategrade() {
    let marks = parseInt(document.getElementById('grade').value);
    if (marks < 0) {
        result.innerHTML = "Invalid Marks";
    }
    else if (marks < 33) {
        result.innerHTML = " You Got 'F' grade";
    }
    else if (marks < 40) {
        result.innerHTML = " You Got 'D' grade";
    }
    else if (marks < 50) {
        result.innerHTML = " You Got 'C' grade";
    }
    else if (marks < 60) {
        result.innerHTML = " You Got 'B' grade";
    }
    else if (marks < 70) {
        result.innerHTML = " You Got 'A-' grade";
    }
    else if (marks < 80) {
        result.innerHTML = " You Got 'A' grade";
    }
    else if (marks <= 100) {
        result.innerHTML = " You Got 'A+' grade";
    }
    else if (marks > 100) {
        result.innerHTML = "Invalid Marks";
    }



}