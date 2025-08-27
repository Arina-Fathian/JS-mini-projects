function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiplication(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  if (num2 === 0) {
    console.log("EROR! division by zero");
  }
  return num1 / num2;
}

function calculator(num1, num2, callback) {
  const calculate = callback(num1, num2);
  return calculate;
}

console.log(calculator(50, 10, division));
