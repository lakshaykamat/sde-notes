/**
 * Calculates the factorial of a given number.
 * 
 * The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
 * It is denoted by n! and defined as:
 * - 0! = 1 (by convention)
 * - n! = n * (n - 1) * (n - 2) * ... * 1
 * 
 * @param {number} n - The non-negative integer whose factorial is to be calculated.
 * @returns {number} The factorial of the given number.
 * 
 * @example
 * 
 * console.log(factorial(5)); // Output: 120
 * 
 * @completed 3 Sep 2024
 */
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Example usage:
console.log(factorial(5)); // Output: 120
