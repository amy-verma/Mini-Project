const calculatorE1 = document.getElementById("calculator");
const display = document.getElementById("display");

let currentValue = "";
let previousValue = null;
let recentValue = null;
let prevOperator = null;
let clearNext = false;
let isResultCalculated = false;

// Append symbol (numbers or dot)
const appendSymbol = (value, symbol) => {
  if (symbol === ".") {
    if (value?.includes(".")) return value;
    if (value === "") return "0.";
    return value + ".";
  }

  if (value === "" || value === "0") {
    return symbol;
  }

  return value + symbol;
};

// Update the display
const updateDisplay = (value) => {
  display.textContent = value;
};

// Perform operation
const performOperation = (operator, a = +previousValue, b = +currentValue) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
};

// Event listener for button clicks
calculatorE1.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  const symbol = e.target.dataset.value;

  // Number or dot
  if (!Number.isNaN(+symbol) || symbol === ".") {
    if (clearNext) {
      previousValue = currentValue;
      currentValue = "";
      clearNext = false;
      isResultCalculated = false;
    }
    currentValue = appendSymbol(currentValue, symbol);
    updateDisplay(currentValue);
    return;
  }

  // Clear
  if (symbol === "c") {
    currentValue = "";
    recentValue = null;
    previousValue = null;
    prevOperator = null;
    updateDisplay("0");
    return;
  }

  // Equals
  if (
    !isResultCalculated &&
    (symbol === "=" || prevOperator) &&
    previousValue
  ) {
    isResultCalculated = true;
    recentValue = currentValue;
    currentValue = performOperation(prevOperator);
    updateDisplay(currentValue);
  } else if (symbol === "=" && prevOperator) {
    currentValue = performOperation(prevOperator, +currentValue, +recentValue);
    updateDisplay(currentValue);
  }

  if (symbol !== "=") {
    prevOperator = symbol;
  }

  clearNext = true;
});
