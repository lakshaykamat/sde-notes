// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
const reverseStr = (str) => {
    let newStr = []
    const strArr = str.split("")
    for (let i = strArr.length - 1; i >= 0; i--) {
        newStr.push(strArr[i])
    }
    return newStr.join("")
}
const isPalindrome = (str) => {
    return str === reverseStr(str)
}
console.log(isPalindrome("madam"))