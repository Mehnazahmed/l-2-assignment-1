
//1.Design a TypeScript function repeatString that takes two parameters: a string and a number.
// The function should return a new string that repeats the input string the specified number of times.


function repeatString(param1:string,param2:number):string{
    let newString ='';
    for(let i=0;i< param2; i++){
       newString +=param1;
    }
    return newString;
}

console.log(repeatString('hello!',8))