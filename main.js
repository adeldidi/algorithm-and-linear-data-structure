// problem 1
let sentence = prompt("give a sentence: ");


let word_number = 1;
let vowel_number = 0;


for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  if (char === " ") {
    word_number++;
  }
  else if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U") {
    vowel_number++;
  }
}

word_number--;

console.log("Number of words: " + word_number);
console.log("Number of vowels: " + vowel_number);

// problem 2

let array_one = [1, 2, 3, 4];
let array_two = [4, 5, 2, 6];
let array_three = [];
let sum = 0;


for (let i = 0; i < array_one.length; i++) {
  let element = array_one[i];
  if (!array_three.includes(element)) {
    sum += element;
    array_three.push(element);
  }
}

for (let i = 0; i < array_two.length; i++) {
  let element = array_two[i];
  if (!array_three.includes(element)) {
    sum += element;
    array_three.push(element);
  }
}

console.log("Sum of  distinct elements: " + sum);