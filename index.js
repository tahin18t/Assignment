function calculateDifference(a, b){
   return Math.abs(a-b);
} //1

function isOdd(a){
   if(a%2 === 0)
      return false;
   else
   return true;
} //2

function findMin(arr){
   return Math.min(...arr)
} //3

function filterEvenNumbers(arr){
   let arr2 = []
   arr.forEach(element => {
      if(element%2 === 0)
         arr2.push(element)
   });
   return arr2;
} //4

function sortArrayDesending(arr){
   arr.sort((a,b) => b-a);
   return arr;
} //5

function lowerCaseFirstLetter(str){
   return str[0].toLowerCase() + str.slice(1);
} //6

function countVowels(str){
   let vowel = 'aeiouAEIOU';
   let count = 0;
   for (let char of str) { // Loop through each character in the string
      if (vowel.includes(char)) { // Check if the character is a vowel
         count++;
      }
   }
   return count;
} //7

function findAverage(arr){
   let sum = 0;
   arr.forEach(element => {
      sum += element;
   });
   return sum/arr.length;
}



console.log("Difference between (10, 5):", calculateDifference(10, 5)); // 5

console.log("Is 7 odd?", isOdd(7)); // true
console.log("Is 8 odd?", isOdd(8)); // false

console.log("Minimum value in [10, 5, 30, 3, 50]:", findMin([10, 5, 30, 3, 50])); // 3

console.log("Even numbers in [1, 2, 3, 4, 5, 6]:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

console.log("Sorted array in descending order [5, 2, 9, 1, 6]:", sortArrayDesending([5, 2, 9, 1, 6])); // [9, 6, 5, 2, 1]

console.log("First letter of 'Hello' to lowercase:", lowerCaseFirstLetter("HellO")); // hellO

console.log("Number of vowels in 'hello world':", countVowels("hello world")); // 3

console.log("Number of vowels in 'aeiou':", countVowels("Education")); // 5
