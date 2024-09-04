/**
 * Reverses the given string.
 * 
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 * 
 * @example
 * 
 * const reversed = reverseStr("hello");
 * console.log(reversed); // Output: "olleh"
 */
const reverseStr = (str) => {
    let newStr = [];
    const strArr = str.split("");
    for (let i = strArr.length - 1; i >= 0; i--) {
        newStr.push(strArr[i]);
    }
    return newStr.join("");
};

/**
 * Checks if a given string is a palindrome.
 * 
 * A palindrome is a word, phrase, or sequence that reads the same backwards as forwards.
 * 
 * @param {string} str - The string to be checked.
 * @returns {boolean} Returns true if the string is a palindrome, false otherwise.
 * 
 * @example
 * 
 * console.log(isPalindrome("madam")); // Output: true
 * console.log(isPalindrome("hello")); // Output: false
 * 
 * @completed 3 Sep 2024 
 */
const isPalindrome = (str) => {
    return str === reverseStr(str);
};

// Test case
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
