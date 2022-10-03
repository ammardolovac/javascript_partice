function execute() {
  let inputNumber = document.getElementById("in1");
  let manifest = document.getElementById("display");

  if (inputNumber.value >= 0) {
    manifest.innerHTML = "number is positive";
  } else if (inputNumber.value < 0) {
    manifest.innerHTML = "number is negative";
  }
}
