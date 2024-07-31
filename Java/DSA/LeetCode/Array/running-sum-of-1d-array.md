---
link: https://leetcode.com/problems/running-sum-of-1d-array
tags:
  - "#dev"
  - "#java"
difficulty: Easy
date: 2023-12-23
---
# 1480. Running sum of 1D Array
Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.

Return the running sum of `nums`.

**Example 1:**

**Input:** nums = [1,2,3,4]
**Output:** [1,3,6,10]
**Explanation:** Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

**Example 2:**

**Input:** nums = [1,1,1,1,1]
**Output:** [1,2,3,4,5]
**Explanation:** Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

**Example 3:**

**Input:** nums = [3,1,2,10,1]
**Output:** [3,4,6,16,17]

**Constraints:**

- `1 <= nums.length <= 1000`
- `-10^6 <= nums[i] <= 10^6`

## Code
### Approach 1
```java
public static int[] runningSum(int[] nums) {
    int[] ans = new int[nums.length];  
    for(int i=1;i<nums.length;i++) {  
        nums[i] += nums[i - 1];  
    }    
    return nums;  
}
```
### Approach 2
```java
public static int[] runningSum2(int[] nums) {    
    int[] ans = new int[nums.length];  
    if(nums.length == 0){  
        return ans;  
    }    
    ans[0] = nums[0];  
    for(int i=1;i<nums.length;i++) {  
        ans[i] = nums[i]+ans[i-1];  
    }
    return ans;  
}
```