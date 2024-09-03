// Write a JavaScript function to check if a given number is prime. 
function isPrimeNumber(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime numbers
    if (num === 2) return true; // 2 is the only even prime number

    // Check for factors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible by any number other than 1 and itself, it's not prime
        }
    }

    return true; // If no factors found, it's a prime number
}

console.log(20)