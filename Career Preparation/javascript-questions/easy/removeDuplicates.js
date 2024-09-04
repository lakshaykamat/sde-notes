/**
 * Removes duplicate elements from an array.
 * 
 * @param {Array} arr - The input array containing elements to be filtered.
 * @returns {Array} A new array with only unique elements from the input array.
 * 
 * @example
 * 
 * const uniqueArray = removeDuplicates([1, 1, 1, 2, 5, 1, 7, 3, 2]);
 * console.log(uniqueArray); // Output: [1, 2, 5, 7, 3]
 * 
 * @completed 4 Sep 2024 9:19
 */
const removeDuplicates = (arr) => {
    const uniqueElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }
    }
    return uniqueElements;
};

// Test case
console.log(removeDuplicates([1, 1, 1, 2, 5, 1, 7, 3, 2])); // Output: [1, 2, 5, 7, 3]
