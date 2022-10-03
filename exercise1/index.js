function calculate() {
  let inputNumber = document.getElementById("in1");
  let display = document.getElementById("display");

  // (15 / 2 = 7.5 => 7*2 = 14 => 15 - 14 = 1) === 15 % 2 = 1
  if (inputNumber.value % 2 === 0) {
    display.innerHTML = "number is even";
  } else {
    display.innerHTML = "number is odd";
  }
}
