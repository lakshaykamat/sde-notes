/**
 * Prints the Fibonacci series up to the nth number.
 * 
 * The Fibonacci series is a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * @param {number} n - The number of terms in the Fibonacci series to print.
 * 
 * @example
 * 
 * printFibonacciSeries(10);
 * // Output:
 * // 0
 * // 1
 * // 1
 * // 2
 * // 3
 * // 5
 * // 8
 * // 13
 * // 21
 * // 34
 * 
 * @completed 3 Sep 2024 
 */
function printFibonacciSeries(n) {
    let a = 0, b = 1, next;

    for (let i = 1; i <= n; i++) {
        console.log(a); // Print the current number
        next = a + b; // Calculate the next number
        a = b; // Update a to the next number
        b = next; // Update b to the sum
    }
}

// Example usage:
printFibonacciSeries(10);
