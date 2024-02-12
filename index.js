// MATH ALGORITTMS

//FIBONACCI SEQUENCE

//PROBLEM
//Given a number, n, find the first 'n' elements of fibonacci sequence

// in mathematics, fibonacci sequence is a sequence where each number is a sum of the two preceding ones
// first two numbers in the sequence are 0, 1

// fibonacci(2) = [0,1]
// fibonacci(3)= [0,1,1]
// fibonacci(4) = [0,1,1, 2]
// fibonacci(5) = [0, 1,1, 2, 3]
// fibonacci(6) = [0, 1,1, 2, 3,5]
// fibonacci(7) = [0, 1,1, 2, 3,5,8]

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
function fib (n){
  const fibo = [0,1]
  for(let i = 2; i < n ; i++){
    fibo[i] = fibo[i-1] + fibo[i -2]
  }
  return fibo
}
// console.log(fibonacci(4))


//FACTORIA OF NUMBER

//  problem statement
//  Given an integer 'n', find the factorial of that integer

// In Mathematics the factorial of non-negative integers, is the product of all positive integers less than or equal to n

// factorial(1) = [1]
// factorial(2) = [2 * 1]
// factorial (3)= [3 * 2 * 1]

function factorial(n){
  let result = 1
   for(let i = 2; i <= n ; i++){
       result *= i
   }

   return result
}
console.log(factorial(4))
// Big-O is O(n) time complexity ie linear

// PRIME NUMBER

function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
// Big-O -- O(n)

// optimize solution
function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// function prime1(n){
//   if(n < 2)return false
//   while(n >= 2){
//  if(n % 2 === 0){
//      return false
//   }
//     return  true
//   }
 

// }
// console.log(prime1(8))
// HERE BIG-O IS O(sqr(n))

//  POWER OF TWO

//  PROBLEM STATEMENT
//  Given a positive integer 'n' , determine if the number is power of 2 or not

// isPowerOfTwo(1) = 2^0
// isPowerOfTwo(2) = 2^1
function isPowerOfTwo(n) {
  if (n < 1) return false;
  for (let i = 1; i < n; i++) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}
// or with while loop
function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
  }
  return true;
}
//BIG-O IS O(logn)
// Best solution with bitwise

function isPowerOfTwo(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}
//BIG-O IS O(1) constant time complexity
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))

// RECURSIVE SOLUTION FOR FIBONACCI

// BREAK DOWN
// fibonacci(0)= 0
// fibonacci(1)= 1
// fibonacci(7) = 13
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(4))
// Big-O  O(2^n)

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(7))
// f6 = f5 + f4

// RECURSIVE OF FACTORIAL
// factoria(1) = 1
// factoria(2) = 2
// factoria(4) = 24
function recursiveFactoria(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactoria(n - 1);
}
// Big-O  O(n) LINEAR
// console.log(recursiveFactoria(4))

// function recursivePowerOfTwo(n){
//   if (n < 1) {
//     return false;
//   }
//   if (  n % 2 !==0) {
//     return false;
//   }
//   else {
//    recursivePowerOfTwo(n/2);

//   }
//  return true
// }

function recursivePowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  } else {
    return recursivePowerOfTwo(n / 2);
  }
}
//  console.log(recursivePowerOfTwo(8))

// console.log(isPowerOfTwo(8))

function prime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// function recurrFibo(n){
//   if(n < 2){
//     return n
//   }

//   return recurrFibo(n - 1) + recurrFibo(n - 2)
// }
// console.log(recurrFibo(4))


// console.log(prime(9))

//  SEARCH ALGORITHM

// LINEAR SEARCH
// pseudocode for linear search
//  start at the first element in the array and move towards the last
//  At each element though, check if the element is equal the target element.
//  if element found, return the index of the element.
//  if element not found, return -1

function search(arr, t) {
  if (arr.length < 0) {
    return -1;
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === t) return i;
  }
  return -1;
}
// console.log(search([], 10))

// BINAY SEARCH

// PROBLEM
// Given a sorted array of  'n' elements and a target element 't', find the index of 't' in the array .
// Return -1 if the target element is not found.

// PSUDOCODE FOR BINARY SEARCH
// if the array is empty , return -1 as for the elements can not be found
// if the array has elements, find the middle element in the array. if the target is equal to the middle element,
// return the indext of the middle element.
//  if the target is less than the middle element, binary search left half of the array.
// if the target is greater than the middle element, binary search right half of the array.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
// Big-O is O(logn) time complexity

// Recursive binary search

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex + 1);
  }
  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex - 1, rightIndex);
  }
}
// Big-O --- O(logn)
// console.log(binarySearch([-5, 2, 5, 8, 10], 8));

// SORTING ALGORITHM
//  we have bubble, insertion, quick and merge sort

// Bubble sort
// Note: Bubble sorting is poor way of sorting algorithm in the real world
// The IDEA
// Compare adjacent elements in the array and swap the positions if they are not in
//  intended order starting from the first index
// Repeat the instruction as you step through each elements
// Once you step through the whole array with no swap , the array is sorted.

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      // to check if need to repeat the loop
    }
  } while (swapped);
}

// reverse

function reverseBubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
      // to check if need to repeat the loop
    }
  } while (swapped);
}
//  Big-O IS O(n^2) Quadratic complexity

// INSERSION SORT
// IDEA
// -> virtually split the array into sorted and unsorted part
// -> assume the first element is already sorted and the remaining are unsorted
//  -> Select an unsorted element and compare and compare with all elements in the sorted part
//  -> if the element in the sorted part is smaller than the selected element, proceed to the next in
//  the unsorted part, Else, shift the larger elements in the sorted part towards the right.
//  -> insert the selected element at the right index
//  ->  Repeat till all the unsorted elements are placed in the right order.
//  start at index 1
//  store the index in a variable
// NTI(number to insert) = element at index1
// SE(sorted element) = first element assumes to be sorted
// check if SE is greater than NTI
// IF NO, Place the NTI to the right of SE

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // sorted element can be more than 1, so let check

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}
// Big-O IS O(n^2)

// QUICK SORT
// IDEAS
//  Identify the pivot element in the array
// we can pick the first element, last element, random element or the median as pivot

// put everything that's smaller than the pivot into 'left' array and everything that is greater than the pivot, in the 'right' array
// repeat the process with the individual "left" and 'right' arraytill you find array length of 1 which is sorted by definition
//  repeatedly concatenatethe left array, pivot,and right array till one sorted array remains

function quickSort(array) {
  if (array.length < 2) return array;
  let pivot = array[array.length - 1];
  let right = [];
  let left = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Big-O
//  This has worst case and average case
//  worse case  is O(n^2) occur when we already sorted array
//  average case is O(nlogn)

// MERGE SORTING
//  IDEA
// Divide the array into sub array, each containing only one element(array with only one element, considered to be sorted)
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining,
//That will be the sorted

// first part we split into a sub array till each array contain just one element
function mergeSort(arr) {
  // base case
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
//second part where the if we have more than one element in an array , we compare and push the smaller to
// the temp array
// function merge(leftArr, rightArr) {
//   const sorted = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) sorted.push(leftArr.shift());
//     else {
//       sorted.push(rightArr.shift());
//     }
//   }
//   return [...sorted, ...leftArr, ...rightArr];
// }

// const arr = [10, -3, 3, 2, 1];

// console.log(mergeSort(arr));



// OOP
// module.exports.BankAccount = class BankAccount {
//   constructor(accountNumber, accountHolderName, balance ){
//     this._accountNumber = accountNumber
//     this._accountHolderName = accountHolderName
//     this._balance = balance
//   }
//   showAccountDetails() {
//    console.log(`Account Number : ${this._accountNumber}`) 
//    console.log(`Account Hoder Name : ${this._accountHolderName}`) 
//    console.log(`Account Balance : ${this._balance}`) 
//   }

//   deposit(amount){
//     this._balance +=amount
//     this.showAccountDetails()
//   }
//   withdraw(amount){
//     if(this._balance >= amount){
//       this._balance -= amount
//       this.showAccountDetails()
//     }
//     else{
//  console.log("Insufficient balance")
//     }
  
    
//   }

  
// }

// const bankAccount = new BankAccount("123456", "pelzman", 2000)

// bankAccount.withdraw(3000)
// console.log(bankAccount)

 
