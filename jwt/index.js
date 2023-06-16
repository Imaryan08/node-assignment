const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
//   modulusLength: 2048,
// });

const user = {
  name: "aryan",
  city: "delhi",
};

const sercret_key = "DBVKJBD";

let token = jwt.sign(user, sercret_key);
// let token = jwt.sign(user, privateKey, { algorithm: "RS256" });

console.log(token);

// let decoded = jwt.verify(token,sercret_key)
// console.log(decoded);
jwt.verify(token, sercret_key, function (err, decoded) {
  if (err) throw err;
  console.log(decoded); // bar
});
