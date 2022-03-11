const counterValue = document.getElementById("value");
const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".btn-reset");
const increaseBtn = document.querySelector(".btn-increase");

let x = 0;

decreaseBtn.addEventListener("click", () => {
  x--;
  counterValue.textContent = x;
  addColor(x);
});

resetBtn.addEventListener("click", () => {
  x = 0;
  counterValue.textContent = x;
  addColor(x);
});

increaseBtn.addEventListener("click", () => {
  x++;
  counterValue.textContent = x;
  addColor(x);
});

function addColor(x) {
  if (x > 0) {
    counterValue.classList.remove("red");
    counterValue.classList.add("green");
  } else if (x < 0) {
    counterValue.classList.remove("green");
    counterValue.classList.add("red");
  } else {
    counterValue.classList.remove("green");
    counterValue.classList.remove("red");
  }
}
