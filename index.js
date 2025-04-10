const { readFileSync } = require("fs");

const pemm = readFileSync("pemm2.csv")
  .toString()
  .split("\r\n")
  .filter((p) => p != "");

console.log(pemm);
