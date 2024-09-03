// Write a JavaScript program to find the maximum number in an array. 
const array = [12, 443, 12, 64, 12]

const max = (arr) => {
    let max = arr[0]
    for (let i of arr) {
        if (max < i) {
            max = i
        }
    }
    return max
}
console.log(max(array))