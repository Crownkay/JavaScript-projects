// set initial count
let count = 0;
// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
//  change increase text to + sign
const increase = document.querySelector(".increase");
increase.addEventListener("click", function () {
  increase.textContent = "+";
});
//  change decrease text to - sign
const decrease = document.querySelector(".decrease");
decrease.addEventListener("click", function () {
  decrease.textContent = "-";
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      increase.textContent = "+";
    } else if (styles.contains("increase")) {
      count++;
      decrease.textContent = "-";
    } else {
      count = 0;
      decrease.textContent = "decrease";
      increase.textContent = "increase";
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
