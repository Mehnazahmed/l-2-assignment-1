//Create a TypeScript function filterEvenNumbers that takes an array of numbers and
//returns a new array containing only the even numbers from the original array.//

function filterEvenNumbers(numbers: number[]): number[] {
  let evenNumbers:number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))
