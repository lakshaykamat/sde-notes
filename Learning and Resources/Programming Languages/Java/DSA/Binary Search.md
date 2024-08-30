---
tags:
  - "#java"
  - "#dsa"
---
# Binary Search
Binary search is an efficient algorithm for finding a target value within a **sorted array**. It works by repeatedly dividing the search interval in half and narrowing down the range of possible locations for the target value.

### How Binary Search Works:

#### 1. Pre-requisites:
- Binary search requires the array to be sorted in ascending (or descending) order beforehand.

#### 2. Procedure:
- **Initialize Pointers:** Define two pointers: `start` at the beginning of the array and `end` at the end of the array.
- **Find Midpoint:** Calculate the midpoint of the array as `mid = (start + end) / 2`.
- **Check Target Value:**
  - If the value at the midpoint (`array[mid]`) is equal to the target value, the search is successful; return the index.
  - If the value at the midpoint is greater than the target value, update the `end` pointer to `mid - 1` and repeat the process.
  - If the value at the midpoint is less than the target value, update the `start` pointer to `mid + 1` and repeat the process.
- **Repeat Steps:** Continue this process by updating the `start` and `end` pointers while recalculating the midpoint until the target value is found or the pointers meet (`start` becomes greater than `end`).

#### 3. Pseudocode:

```java
Procedure binarySearch(array, target):
    Initialize start = 0, end = array.length - 1

    while start <= end:
        mid = start + (end - start) / 2

        if array[mid] == target:
            return mid

        if array[mid] < target:
            start = mid + 1
        else:
            end = mid - 1

    return -1 (or indicate target not found)
```

### Example:
Consider an array `arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`:

Let's say we want to search for the value `12`.

- Initial `start = 0`, `end = 9`.
- First iteration: `mid = (0 + 9) / 2 = 4`.
  - `arr[4]` is `10` which is less than `12`. Update `start = 5`.
- Second iteration: `start = 5`, `end = 9`, `mid = (5 + 9) / 2 = 7`.
  - `arr[7]` is `16` which is greater than `12`. Update `end = 6`.
- Third iteration: `start = 5`, `end = 6`, `mid = (5 + 6) / 2 = 5`.
  - `arr[5]` is `12`, which matches the target value. Return the index `5`.

### Key Points:
- Binary search is highly efficient for searching in sorted arrays.
- It has a time complexity of O(log n), where n is the number of elements in the array.
- It reduces the search space by half in each iteration, making it significantly faster compared to linear search for large datasets.