// Source: https://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php
// 1. Write a JavaScript program to calculate the factorial of a number. 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 

const factorial = (num, result = 1) => {
    if (num == 1) {
      return result;
    }
    result *= num;
    return factorial(num - 1, result);
  }
  
factorial(5);

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. 




// 3. Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const range = (x, y, result = []) => {
    if( x + 1 == y) {
      return;
    }
    result.push(x + 1)
    return range(x + 1, y, result);  
  }
  
range(2, 9)


// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21 

const sumArray = (array, result=0) => {
    if(array.length == 0) {
      return result;
    }
    result += array.shift();
    return sumArray(array, result)
  }
    

// 5. Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.



// 6. Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

const fibonacci = (len, result=[0, 1]) => {
  if(result.length === len) {
    return result;
  }
  result.push(result[result.length - 1] + result[result.length -2]);
  return fibonacci(len, result);
}
fibonacci(5);



// 7. Write a JavaScript program to check whether a number is even or not. Go to the editor
const isEven = (num) => { 
    if( (num - 2) < 1 ) {
      return num === 0
    }
    return isEven(num - 2);
  }
isEven(2)


// 8. Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

const binarySearch = (array, item, i=0) => {
  if (array[i] == item) {
    return i;
  }
  i++;
  return binarySearch(array, item, i);  
}



// 9. Write a merge sort program in JavaScript. Go to the editor
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]