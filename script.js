//1. How would you define a function that takes two numbers as parameters and returns their sum?
function sumOfTwoNumbers(a,b){
    return `The Sum of a+b is: ${a+b}`
}
console.log(sumOfTwoNumbers(10,20));

//2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?
function stringToUpperCase(a){
    return a.toUpperCase();
}
console.log(stringToUpperCase('Pavan Kalyan'));

//3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?
function undefinedValue(a){
    return a
}
console.log(undefinedValue());

//4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?
function isArrayEmpty(array){
    if(array.length==0){
        return `The Given Array is Empty`
    }
    else{
        return `The Given Array is Not Empty`
    }
}
console.log(isArrayEmpty([10,10,10]));

//5. write a function that takes two numbers as parameters and returns their difference.
function differenceOfTwoNums(a,b){
    return a
}
console.log(differenceOfTwoNums(20,10));

//6.Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."
function differenceOfTwoNums(name,age){
    return `"Hello, ${name}! You are ${age} years old.`
}
console.log(differenceOfTwoNums('Pavan Kalyan', 24));

//7.Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.
function isEven(number){
    if(number%2==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(38));