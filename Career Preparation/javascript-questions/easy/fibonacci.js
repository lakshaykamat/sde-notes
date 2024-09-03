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
