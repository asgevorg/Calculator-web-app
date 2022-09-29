//Level 1
//1. Given an array of non-negative integer numbers arr, return the maximum value from it, or -1 if the array has no elements 
// arr = [1,2,3,7,22,34,21,9,2];

// function max_of_arr(arr){
//     if(arr.length > 0) {
//         let max = arr[0]
//         for(i in arr) if(arr[i] > max) max = arr[i];
//         return max;
//     }else return -1;
// }
// console.log(max_of_arr(arr));

//2 Given an array of non-negative integer numbers arr, return the count of even elements from it 
// arr = [1,2,3,7,22,34,21,9,2];
// function evenElem_count_of_arr(arr){
//     if(arr.length > 0){
//         let cnt = 0;
//         for(i in arr) if(arr[i] % 2 == 0) cnt++;
//         return cnt;
//     }else return -1
// }
// console.log(evenElem_count_of_arr(arr));
//3 Given an array of integers arr and 2 indices i and j, swap the i-th and j-th elements of the array 
// function swap_arr_elems(i, j, arr){
//     if(i < arr.length && j < arr.length){
//         arr[i] = arr[i] ^ arr[j];
//         arr[j] = arr[i] ^ arr[j];
//         arr[i] = arr[i] ^ arr[j];
//     }else console.log(`${i} or ${j} element is out of range of given array`);
    
// }
// arr = [1,2,3,4,5]
// swap_arr_elems(2,4,arr)
// console.log(arr)
//4 Given a non-negative integer n, iterate over the numbers from 1 to n and do the following
//  - If the number is divisible by 3 and 5, print “FizzBuzz” 
//  - If the number is divisible by 3, print “Fizz” 
//  - If the number is divisible by 5, print “Buzz”
//  - Otherwise print the number 

// let a = 10;
// function fizz_buzz(n){
//     //or n part is written because "" || n is always n // solution can be written also with if, else if statements
//     console.log((n % 3 ? "" : "Fizz") + (n % 5 ? "": "Buzz") || n);
// }
// fizz_buzz(a)

//Level 2
//1 Given an array that consists of only 1s and 0s, return the sorted array where 0s are at the beginning 
// let a = [1,1,1,1,1,0,1]
// function os_toStart(arr){
//     let ans = []
//     let cnt0 = 0;
//     for(i in a) if(a[i] == 0) cnt0++;
//     for(i in a) if(i < cnt0) ans.push(0) 
//         else ans.push(1)
//     return ans
// }
// console.log(os_toStart(a));
//2 Given an integer n, return true if it is a prime number and false if it is not 
// function isPrime(n){
//     if(n == 2) return true
//     if(n <= 1 || !(n % 2)) return false
//     for(let i = 3; i < Math.floor(Math.sqrt(n)) + 1; i+=2){
//         //if n % i == 0 this means that the n number is not prime, so we had to convert it to 1 to enter the if and return false
//         if(!(n % i)) return false
//     }
//     return true
// }
// console.log(isPrime(8))
//3 Given an array of integer number arr, return the second distrinct maximum value of it, or –1 if the array has less than 2 elements 
// let arr = [2]
// function secMax(arr){
//     if(arr.length < 2) return -1
//     let max = arr[0];
//     let max2nd = arr[1];
//     for(i in arr){
//         if(arr[i] > max) max = arr[i]
//         else if(arr[i] < max && arr[i] > max2nd) max2nd = arr[i]
//     }
//     return max2nd
// }
// console.log(secMax(arr));