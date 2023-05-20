const { randomBytes, randomInt } = require("crypto");

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

// exports.generateRandomNumber = () => {
//   const bytes = randomBytes(16);

//   const randomHex = bytes.toString("hex");

//   console.log(randomHex);
//   console.log(randomHex.length);
// };

exports.generateRandomNumber = (size) => {
  randomBytes(size, (err, buf) => {
    if (err) throw err;
    console.log(`${buf.length} bytes of random data: ${buf.toString("hex")}`);
  });
};

exports.randomInteger = (limit) => {
  randomInt(limit, (err, n) => {
    if (err) throw err;
    console.log(`Random number chosen from 0 to ${limit}: ${n}`);
  });
};
