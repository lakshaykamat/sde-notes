// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const fn = (arr) => {
    const newArr = []
    for (let i of arr) {
        if (i % 2 == 0) {
            newArr.push(i)
        }
    }
    return newArr
}

console.log(fn([1, 2, 3, 4, 5, 6, 7, 8, 9]))