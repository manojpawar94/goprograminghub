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

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
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

</div>
</div>

> **Original Problem:** https://leetcode.com/problems/maximum-subarray/