//*Design a TypeScript function findLargestNumber that takes an array of numbers and
//returns the largest number in the array.//

function findLargestNumber(numbers: number[]): number {
  let largestNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];
    }
  }
  return largestNum;
}

console.log(findLargestNumber([50, 5, 8, 20, 3]))
