Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases?

Type guards are necessary in TypeScript to provide more precise type information at runtime, especially when working with union types or unknown values. They allow developers to narrow down the type of a variable within a certain block of code, based on runtime checks or conditions. This helps in writing safer and more maintainable code by enabling the TypeScript compiler to infer more specific types and provide better type safety.

Various Types of Type Guards are:

1.typeof Type Guards:
The typeof operator can be used to check the type of a variable at runtime. It's particularly useful for primitive types like strings, numbers, booleans, and symbols.

Example:

function printLength(value: string | number) {
    if (typeof value === 'string') {
        console.log(value.length); // string
    } else {
        console.log('Not a string');
    }
}

2.instanceof Type Guards:
The instanceof operator is used to check if an object is an instance of a particular class or constructor function.

Example:

class Animal {}
class Dog extends Animal {}

function printSound(animal: Animal) {
    if (animal instanceof Dog) {
        console.log('Woof!'); // Dog
    } else {
        console.log('Unknown sound');
    }
}

3.in Type Guards:
The in operator is used to check if a property exists in an object.

Example:

interface Circle {
    radius: number;
}

function printArea(shape: Circle | { sideLength: number }) {
    if ('radius' in shape) {
        console.log(Math.PI * shape.radius ** 2); // Circle
    } else {
        console.log(shape.sideLength ** 2);
    }
}

4.Custom Type Guards:
Custom type guards are user-defined functions that return a type predicate. They allow developers to create custom runtime checks for type narrowing.

Example:

function isString(value: any): value is string {
    return typeof value === 'string';
}

function printLength(value: string | number) {
    if (isString(value)) {
        console.log(value.length); // string
    } else {
        console.log('Not a string');
    }
}

5.Nullable Type Guards:
Nullable type guards are used to check if a variable is not null or undefined before accessing its properties or methods.

Example:

function printLength(value: string | null | undefined) {
    if (value !== null && value !== undefined) {
        console.log(value.length); // string
    } else {
        console.log('Value is null or undefined');
    }
}
