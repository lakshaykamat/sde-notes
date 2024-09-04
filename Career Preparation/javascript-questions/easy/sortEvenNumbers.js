/**
 * Filters an array of numbers, returning a new array with only the even numbers.
 * 
 * @param {Array<number>} arr - The input array containing numbers to be filtered.
 * @returns {Array<number>} A new array containing only even numbers from the input array.
 * 
 * @example
 * 
 * const evenNumbers = fn([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * console.log(evenNumbers); // Output: [2, 4, 6, 8]
 * 
 * @completed 3 Sep 2024 
 */
const fn = (arr) => {
    const newArr = [];
    for (let i of arr) {
        if (i % 2 === 0) {
            newArr.push(i);
        }
    }
    return newArr;
};

// Test case
console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: [2, 4, 6, 8]
