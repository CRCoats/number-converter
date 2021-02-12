// Initial (only testing with normal lettered strings)
let input = "Cody";
input = input.toLowerCase();
const inputArray = input.split("");

// Converts original input into array of digits 1 through 9.
// abc = 1, def = 2, ghi = 3, jkl = 4, mno `= 5, pqr = 6, stu = 7, vw = 8, xyz = 9
//      | 1 | 2 | 3 |
//      | 4 | 5 | 6 | 
//      | 7 | 8 | 9 |
let convertedArray = [];
for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == "a" || inputArray[i] == "b" || inputArray[i] == "c") {
        convertedArray.push("1");
    } else if (inputArray[i] == "d" || inputArray[i] == "e" || inputArray[i] == "f") {
        convertedArray.push("2");
    } else if (inputArray[i] == "g" || inputArray[i] == "h" || inputArray[i] == "i") {
        convertedArray.push("3");
    } else if (inputArray[i] == "j" || inputArray[i] == "k" || inputArray[i] == "l") {
        convertedArray.push("4");
    } else if (inputArray[i] == "m" || inputArray[i] == "n" || inputArray[i] == "o") {
        convertedArray.push("5");
    } else if (inputArray[i] == "p" || inputArray[i] == "q" || inputArray[i] == "r") {
        convertedArray.push("6");
    } else if (inputArray[i] == "s" || inputArray[i] == "t" || inputArray[i] == "u") {
        convertedArray.push("7");
    } else if (inputArray[i] == "v" || inputArray[i] == "w") {
        convertedArray.push("8");
    } else if (inputArray[i] == "x" || inputArray[i] == "y" || inputArray[i] == "z") {
        convertedArray.push("9");
    }
};

// Function: find cell & add dot
function addDot(number) {
    if (number == 1) {
      document.alphaOne.style.backgroundColor = 'red';
    } else if (number == 2) {
      document.alphaTwo.style.backgroundColor = 'blue';
    } else if (number == 3) {
      document.alphaThree.style.backgroundColor = 'green';
    } else if (number == 4) {
      document.betaOne.style.backgroundColor = 'purple';
    } else if (number == 5) {
      document.betaTwo.style.backgroundColor = 'gold';
    } else if (number == 6) {
      document.betaThree.style.backgroundColor = 'pink';
    } else if (number == 7) {
      document.gammaOne.style.backgroundColor = 'brown';
    } else if (number == 8) {
      document.gammaTwo.style.backgroundColor = 'lightblue';
    } else if (number == 9) {
      document.alphaOne.style.backgroundColor = 'orange';
    }
  }

// Takes converted digits and determines coordinate
for (i = 0; i < convertedArray.length; i++) {
    addDot(convertedArray[i]);
}

// CONSOLE LOGS
console.log(inputArray);
console.log(convertedArray);