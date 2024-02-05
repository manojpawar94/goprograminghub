---
title: "LeetCode 06 : Maximum Subarray"
excerpt: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

##### Example 1:

```shell
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

##### Example 2:

```shell
Input: nums = [1]
Output: 1
```

##### Example 3:

```shell
Input: nums = [5,4,-1,7,8]
Output: 23
```

##### Constraints

> - 1 <= nums.length <= 10^5
> - -10^4 <= nums[i] <= 10^4

**Follow up**: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle

#### Solution

<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  ```java[class="line-numbers"]
class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = Integer.MIN_VALUE, sum = 0;
        for(int index = 0; index < nums.length; index++) {
            sum += nums[index];
            
            if(sum > maxSum) {
                maxSum = sum;
            } 
            
            if(sum < 0) {
                sum = 0;
            }
        }
        
        return maxSum;
    }
}
```

The above solution is for the "Maximum Subarray" problem. It efficiently finds the contiguous subarray with the largest sum within a given array `nums`. Here's how the code works:

1. The `maxSubArray` function takes an integer array `nums` as input and returns an integer representing the maximum sum of a contiguous subarray.
2. It initializes `maxSum` to the minimum possible value (`Integer.MIN_VALUE`) and `sum` to 0.
3. The loop iterates through the array using the index variable.
4. Inside the loop:
   - The current element is added to the `sum`.
   - If the `sum` becomes greater than the current `maxSum`, the `maxSum` is updated.
   - If the `sum` becomes negative, it means that continuing the current subarray won't lead to a larger sum, so the `sum` is reset to 0 to start a new potential subarray.
5. Finally, the function returns `maxSum`, which holds the maximum sum of a contiguous subarray.

The solution follows the Kadane's algorithm, which is an efficient algorithm for finding the maximum subarray sum in an array. It keeps track of the current sum and resets it when a negative sum is encountered, while also maintaining the overall maximum sum encountered so far.

This code provides an optimal solution for finding the maximum subarray sum and is suitable for larger arrays as well.
</div>
</div>

> **Original Problem:** https://leetcode.com/problems/maximum-subarray/