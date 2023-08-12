---
title: "LeetCode 04 : Container With Most Water"
excerpt: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i])."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

##### Example 1:

<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;">

```shell
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

##### Example 2:

```shell
Input: height = [1,1]
Output: 1
```

##### Constraints

> - n == height.length
> - 2 <= n <= 105
> - 0 <= height[i] <= 10^4


#### Solution

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  ```java[class="line-numbers"]
class Solution {
    public int maxArea(int[] heights) {
        int maxArea = 0, p1 = 0, p2 = heights.length -1 ;
        while ( p2 > p1 ) {
            maxArea = Math.max(maxArea, Math.min(heights[p1],heights[p2]) * Math.abs(p2 - p1));
            if(heights[p1] <= heights[p2]){
                p1++;
            } else {
                p2--;
            }
        }
        return maxArea;
    }
}
```

The above solution is for the "Container With Most Water" problem using the two-pointer approach to find the maximum amount of water a container can store between vertical lines. Here's how the code works:

1. The `maxArea` function takes an integer array `heights` as input and returns an integer representing the maximum amount of water a container can store.
2. It initializes variables `maxArea` to store the maximum area and `p1` and `p2` as pointers to track the left and right vertical lines.
3. The loop iterates while `p2` is greater than `p1`, indicating there are still possible combinations of lines to check.
4. Inside the loop:
   - The current area is calculated as the minimum height between the lines at positions `p1` and `p2`, multiplied by the width between them (`Math.abs(p2 - p1)`).
   - The maximum area is updated using `Math.max`.
   - If the height at `p1` is less than or equal to the height at `p2`, it means moving the left pointer (`p1`) inward might lead to a larger area, so `p1` is incremented.
   - Otherwise, the right pointer (`p2`) is decremented since moving it inward might lead to a larger area.
5. Finally, the maximum area is returned.

The two-pointer approach efficiently searches for the largest possible area by systematically moving the pointers towards each other. This ensures that all possible combinations of lines are considered while avoiding unnecessary computations.

This code provides an effective solution for finding the maximum amount of water that can be stored between vertical lines.
</div>
</div>