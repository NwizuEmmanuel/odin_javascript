function add7(number) {
  return number + 7;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function capitalize(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.slice(1);
}

function lastLetter(str) {
  return str.charAt(str.length - 1);
}

console.log(`add7 function: ${add7(3)}`);
console.log(`multiply function: ${multiply(2, 10)}`);
console.log(`capitalize function: ${capitalize("ROCK'N ROLL")}`);
console.log(`lastLetter function: ${lastLetter("Zion")}`);
