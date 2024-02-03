// WPU Coding Challenge 2024
// 1/366
//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

/*
=====SOAL======
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/


function grow(x) {
  let result = 1
  for (let coba of x) {
    result *= coba
  }
  return result
}

console.log(grow([4, 1, 1, 1, 4]));