
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  
  switch (true) {
    case isNaN(inputInt):
      output.textContent = "Please enter a valid number.";
      break;
    case inputInt === -1 || inputInt === 0:
      output.textContent = "Please enter a number greater than or equal to 1.";
      break;
    case inputInt >= 4000:
      output.textContent = "Please enter a number less than or equal to 3999.";
      break;
    default:
      output.textContent = convertToRoman(inputInt);
      break;
  }
}

const convertToRoman = (num) => {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let roman = '';
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }
  return roman;
}

convertBtn.addEventListener('click', () => {
  checkUserInput();
  numberInput.value = "";
  }
  );