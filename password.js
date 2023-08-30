const generatepassword = require("generate-password");

var password = generatepassword.generate({
  length: 15,
  numbers: false,
  uppercase: false,
});

console.log(password);