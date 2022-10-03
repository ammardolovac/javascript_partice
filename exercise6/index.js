let total = [];
const execute = () => {
  let inputValue = document.getElementById("in1").value;
  let displayEl = document.getElementById("display");

  if (inputValue === "end") {
    for (let i = 0; i < total.length; i++) {
      displayEl.innerHTML += "<br>" + total[i];
    }
  } else {
    total.push(inputValue);
  }

  
};
