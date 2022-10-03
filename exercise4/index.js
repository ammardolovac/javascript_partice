const execute = () => {
  let inputHeight = document.getElementById("in1").value;
  let manifest = document.getElementById("display");

  if (inputHeight < 160 && inputHeight >= 0) {
    manifest.innerHTML = "ispod proseka";
  } else if (inputHeight > 180) {
    manifest.innerHTML = "prosecna visina";
  } else if (inputHeight < 0) {
    manifest.innerHTML = "ERROR";
  } else {
    manifest.innerHTML = "iznad proseka";
  }
};
