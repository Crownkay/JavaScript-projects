const colors = ["green", "red", "rgba(133, 122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const myColor = document.getElementById("myColor");

btn.addEventListener("click", function () {
  // get random number between 0-3
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  myColor.style.color = colors[randomNumber];
  color.textContent = colors[randomNumber];
  // myColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
