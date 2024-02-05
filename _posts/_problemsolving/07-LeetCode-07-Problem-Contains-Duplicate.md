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

<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

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

The above solution is for the "Contains Duplicate" problem. It checks whether there are any duplicate elements in the given integer array `nums`. Here's how the code works:

1. The `containsDuplicate` function takes an integer array `nums` as input and returns a boolean value indicating whether the array contains any duplicate elements.
2. It initializes a `Set` named `set` to store encountered elements.
3. The loop iterates through the array using a `for-each` loop.
4. Inside the loop:
   - For each element `num`, the `add` method of the `set` is called. If the element is already present in the set (i.e., it's a duplicate), the `add` method will return `false`, and the function immediately returns `true`, indicating the presence of duplicates.
5. If the loop completes without finding any duplicates, the function returns `false`.

The code efficiently uses a `Set` data structure to keep track of encountered elements. If an element is already present in the set, it means a duplicate has been found. Otherwise, the element is added to the set for future comparison.

This code provides a simple and efficient solution to determine whether an array contains duplicate elements.
</div>
</div>

> **Original Problem:** https://leetcode.com/problems/contains-duplicate/
