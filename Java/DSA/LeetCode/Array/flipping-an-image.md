---
tags:
  - "#dev"
date: 2023-12-25
link: https://leetcode.com/problems/flipping-an-image/
difficulty: Easy
---
# Flipping an Image
## Problem Description
Given a 2D array representing an image composed of 0s and 1s, the task is to perform two operations on the image:

1. Flip the image horizontally.
2. Invert the flipped image by replacing 0s with 1s and 1s with 0s.

### Example

Given `[1,1,0]`:

1. Flip horizontally: `[0,1,1]`
2. Invert: `[1,0,0]`

## Code
```java
public static int[][] flipAndInvertImage(int[][] image) {  
    int[][] invertedArray = new int[image.length][image[0].length];  
  
    //Flipping the array  
    for(int i=0;i<image.length;i++){  
        for(int j=image.length-1;j>=0;j--){  
          invertedArray[i][image.length-1 - j] = image[i][j];  
        }  
    }  
  
    //Inverting the array  
    for(int i=0;i<invertedArray.length;i++){  
        for(int j=0;j<invertedArray.length;j++){  
            if(invertedArray[i][j] == 1) invertedArray[i][j] = 0;  
            else if(invertedArray[i][j] == 0) invertedArray[i][j] = 1;  
        }  
    }  
  
    return invertedArray;  
}
```

### Second apporach
```java
public static int[][] flipAndInvertImage(int[][] image) {
    int rows = image.length;
    int columns = image[0].length;
    int[][] flippedAndInverted = new int[rows][columns];

    // Flipping the array and inverting it
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < columns; j++) {
            // Flip horizontally and invert simultaneously
            flippedAndInverted[i][columns - 1 - j] = (image[i][j] == 1) ? 0 : 1;
        }
    }

    return flippedAndInverted;
}
```