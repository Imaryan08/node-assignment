exports.add = (num1, num2) => {
  console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
  return;
};

exports.sub = (num1, num2) => {
  console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`);
  return;
};

exports.div = (num1, num2) => {
  console.log(`Division of ${num1} and ${num2} is ${num1 / num2}`);
};

exports.mul = (num1, num2) => {
  console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
};

exports.sine = (degree) => {
  console.log(`sine of ${degree} is ${Math.sin(degree).toFixed(2)}`);
};

exports.cos = (degree) => {
  console.log(`cosine of ${degree} is ${Math.cos(degree).toFixed(2)}`);
};

exports.tan = (degree) => {
  console.log(`tangent of ${degree} is ${Math.tan(degree).toFixed(2)}`);
};
