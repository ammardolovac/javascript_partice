let resultArray = [];

const execute = () => {
  let inputValue = document.getElementById("input").value;
  inputValue = parseInt(inputValue);
  document.getElementById("input").value = "";
  if (inputValue % 5 === 0 && inputValue % 3 === 0) {
    resultArray.push(inputValue + " - FizzBuzz");

    for (let i = 0; i < resultArray.length; i++) {
      document.getElementById("display").innerHTML += "<br>" + resultArray[i];
    }
  } else if (inputValue % 5 !== 0 && inputValue % 3 !== 0) {
    resultArray.push(inputValue);
  } else if (inputValue % 3 === 0) {
    resultArray.push(inputValue + " - Fizz");
  } else if (inputValue % 5 === 0) {
    resultArray.push(
      `<span style="color: blue; text-align: center">${inputValue}  " - Buzz</span>`
    );
  }
  return false;

  console.log(resultArray);
  console.log(inputValue);
};


