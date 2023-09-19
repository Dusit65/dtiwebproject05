// console.log("Congrats");
let quiz = document.getElementById("quiz");
let midterm = document.getElementById("midterm");
let final = document.getElementById("final");

let btcalSumGrade = document.getElementById("bt-calSumGrade");
let btCancel = document.getElementById("bt-Cancel");

let showSum = document.getElementById("show-sum");
let showGrade = document.getElementById("show-grade");

function varidateData() {
  if (quiz.value.length == 0) {
    alert("ป้อน quiz ด้วย...");
    return false;
  } else if (isNaN(quiz.value)) {
    alert("ป้อน quiz ด้วยตัวเลขเท่านั้น...");
    return false;
  } else if (midterm.value.length == 0) {
    alert("ป้อน midterm ด้วย...");
    return false;
  } else if (isNaN(midterm.value)) {
    alert("ป้อน midterm ด้วยตัวเลขเท่านั้น...");
    return false;
  } else if (final.value.length == 0) {
    alert("ป้อน final ด้วย...");
    return false;
  } else if (isNaN(final.value)) {
    alert("ป้อน final ด้วยตัวเลขเท่านั้น...");
    return false;
  }
  return true;
}

function calSum() {
  let sum =
    parseInt(quiz.value) + parseInt(midterm.value) + parseInt(final.value);
  return sum;
}

function calGrade(sum) {
  if (sum >= 80) {
    showSum.innerHTML = "<strong> ได้คะแนนรวม " + sum + "คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด A</strong>";
  } else if (sum >= 50) {
    showSum.innerHTML = "<strong> ได้คะแนนรวม " + sum + "คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด B</strong>";
  } else {
    showSum.innerHTML = "<strong> ได้คะแนนรวม " + sum + "คะแนน</strong>";
    showGrade.innerHTML = "<strong>ได้เกรด C</strong>";
  }
}

btcalSumGrade.addEventListener("click", () => {
  if (varidateData()) {
    calGrade(calSum())
  }
});

btCancel.addEventListener("click", () => {
  showSum.innerHTML = "";
  showGrade.innerHTML = "";
});
