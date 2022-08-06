---
title: "LeetCode 07 : Contains Duplicate"
excerpt: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

##### Example 1:

```shell
Input: nums = [1,2,3,1]
Output: true
```

##### Example 2:

```shell
Input: nums = [1,2,3,4]
Output: false
```

##### Example 3:

```shell
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

##### Constraints

> - 1 <= nums.length <= 10^5
> - -10^9 <= nums[i] <= 10^9

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
  public boolean containsDuplicate(int[] nums) {
      Set<Integer> set = new HashSet<Integer>();
      for(int num : nums){
          if(!set.add(num)){
              return true;
          }
      }
      return false;
  }
}
```

</div>
</div>

> **Original Problem:** https://leetcode.com/problems/contains-duplicate/
