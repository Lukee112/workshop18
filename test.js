//console.log('Test case');
function solution(arr) {
    let largestProduct = -Infinity 
   arr.forEach((num, index) => )
}

// expect "solution" to be function
console.assert(typeof solution === 'function', 'solution is a function')


// expect type of "solution ([3, 6, -2, -5, 7, 3])" to be number
console.assert(typeof solution([3, 6, -2, -5, 7, 3]) === 'number' , 'solution is a number')

// expect solution ([3, 6 ,-2, -5, 7, 3]) to be 21 
console.assert(typeof solution ([3, 6, -2, -5, 7, 3]) === 21, 'solution returns correct value')

// expect ([ solution 0, 0, 0]) throw error
try {
    solution([0, 0, 0]);
    console.log("Test passed!"); // Pass test
} catch (error) {
    console.error("Test failed:", error.message); // Handle the error here
}

// expect solution([]) to return null 
console.assert(typeof solution ([]) === 'null')
// expect solutions ([1 x 1mil]) to not error
console.assert(typeof solution ([1 x 1mil]) === 1000000, 'solution does not error')
// expect solution([-3, -6, -2, -5, -7, -3]) to be 35
console.assert(typeof solution ([-3, -6, -2, -5, -7, -3]) === 35, 'solution returns correct value')
// expect solution([-3, 6, -2,])
console.assert(typeof solution ([-3,6,-2]) === 1)