//Design a TypeScript function reverseArray that takes an array of any type and
//returns a new array with its elements reversed.Use generics to define types.

function reverseArray<T>(arr: T[]): T[] {
  const reversedArray: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;


}

console.log(reverseArray(["apple", "banana", "cherry"]))

