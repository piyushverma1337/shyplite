// Question 1: Create an Array from 0...100 without using traditional For-loop

let arr = [...Array(101).keys()];
// console.log(arr);

// Question 2: Create an Array of only even numbers from the above array

let evenArr = arr.filter(elem => !(elem % 2));
// console.log(evenArr);

// Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed

const evenSq = (num) => {
    return new Promise((resolve, reject) => {
        if (!(num % 2)) resolve(num * num);
        else reject('error: not even')
    })
};

// evenSq(3)
// .then((square) => console.log(square))
// .catch((err) => console.log(err));

// Question 3: create an array of even squares using the previous array

let evenSquares = evenArr.map((elem) => elem * elem);
// console.log(evenSquares);

// Question 4: Sum of all the squares from the above array of Even Squares

let sumAllSquares = evenSquares.reduce((elem, acc) => elem + acc, 0);
// console.log(sumAllSquares);

// Question 5: Call the above square Promise function with all numbers from 0-100
// and ensure that the errors are not thrown
// then print the following:
// 1. Number of errors 
// 2. The resultant array
// 3. Number of objects in the resultant array

let outArr = [];
let errorCount = 0;

arr.forEach((elem) => {
    evenSq(elem)
        .then((sq) => outArr.push(sq))
        .catch((err) => errorCount++);
});
console.log(`Error Count: ${errorCount}, Out Array: ${outArr}, Out Array Length: ${outArr.length}`);
