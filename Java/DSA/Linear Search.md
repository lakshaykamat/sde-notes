---
tags:
  - "#dsa"
  - "#java"
---
# Linear Search
linear search algorithm is a simple and straightforward searching algorithm used to find a target value within an array or list. 

It works by sequentially checking each element in the array until the target element is found or the entire array has been traversed.

### How Linear Search Works:

#### 1. Procedure:
- **Start from the Beginning:** Begin the search from the first element (`index = 0`) of the array.
- **Compare with Target Value:** Check if the current element matches the target value:
  - If it matches, return the index at which it was found.
  - If it doesn't match, move to the next element in the array and repeat the process.
- **Repeat Until the End:**
  - Continue this process until either the target value is found or the end of the array is reached.

#### 2. Pseudocode:

```java
static int linearSearch(int array, int target){
	for(int value:array){
		if(value==target){
			return value;
		}
	}
    return -1
}
```

### Example:
Consider an array `arr = [4, 8, 2, 15, 7, 12]`:

Let's say we want to search for the value `15`.

- Start from index `0`: `arr[0] = 4`. It doesn't match.
- Move to index `1`: `arr[1] = 8`. It doesn't match.
- Index `2`: `arr[2] = 2`. It doesn't match.
- Index `3`: `arr[3] = 15`. It matches. Return the index `3`.

### Key Points:
- Linear search is suitable for small-sized arrays or when the elements are not sorted.
- It has a time complexity of O(n), where n is the number of elements in the array.
- It searches through each element sequentially from the start until the target element is found or the end of the array is reached.
- If the target value is found, it returns the index at which the target value is located; otherwise, it returns -1 (or any designated indicator) to signify that the target value is not present in the array.