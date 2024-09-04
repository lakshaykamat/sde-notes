/**
 * Finds the maximum number in an array.
 * 
 * @param {Array<number>} arr - The array of numbers to search.
 * @returns {number} The maximum number found in the array.
 * 
 * @example
 * 
 * const array = [12, 443, 12, 64, 12];
 * const maxValue = max(array);
 * console.log(maxValue); // Output: 443
 * 
 * @completed 3 Sep 2024 
 */
const max = (arr) => {
    let max = arr[0];
    for (let i of arr) {
        if (max < i) {
            max = i;
        }
    }
    return max;
};

// Test case
const array = [12, 443, 12, 64, 12];
console.log(max(array)); // Output: 443
