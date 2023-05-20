const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const mul = (num1, num2) => {
  return num1 * num2;
};

const res = mul(num1, num2);
console.log(res);
