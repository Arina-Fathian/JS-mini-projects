const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b,
};

function calculator(num1, num2, operation) {
  return operations[operation](num1, num2);
}

console.log(calculator(30, 10, "addition"));
console.log(calculator(30, 10, "subtraction"));
console.log(calculator(30, 10, "multiplication"));
console.log(calculator(30, 10, "division"));
