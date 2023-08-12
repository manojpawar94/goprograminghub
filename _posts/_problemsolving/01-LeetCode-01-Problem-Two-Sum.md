---
title: "LeetCode 01 : Two Sum"
excerpt: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

##### Example 1:

```shell
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

##### Example 2:

```shell
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

##### Constraints

> -   2 <= nums.length <= 104
> -   -109 <= nums[i] <= 109
> -   -109 <= target <= 109
> -   Only one valid answer exists.

**Follow-up:** Can you come up with an algorithm that is less than O(n2) time complexity?

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

    public int[] twoSum(int[] nums, int target) {

        Map<Integer, Integer> lookup = new HashMap<>();

        for(int index = 0; index < nums.length; index++) {
            int complement = target - nums[index];

            if(lookup.containsKey(complement)){
                return new int[] { lookup.get(complement), index };
            }

            lookup.put(nums[index], index);
        }

        return null;
    }

}

```

The above Java solution is for the "Two Sum" problem. It utilizes a HashMap to store encountered numbers along with their indices for efficient lookup. The code is quite clear and follows the same logic to achieve O(n) time complexity. Here's a breakdown of how the code works:

1. Create a HashMap called `lookup` to store encountered numbers as keys and their indices as values.
2. Loop through the array `nums`, using an index to keep track of the current position.
3. Calculate the complement by subtracting the current number from the target value.
4. Check if the complement exists in the `lookup` HashMap using `lookup.containsKey(complement)`. If it does, it means you've found the pair of numbers that add up to the target.
5. If the complement is found, return the indices of the current number and the complement from the `lookup` HashMap using `lookup.get(complement)` and the current index.
6. If the complement is not found, add the current number and its index to the `lookup` HashMap.
7. If no solution is found after looping through the array, return `null` to indicate that no valid pair was found.

Overall, code effectively solves the "Two Sum" problem with an optimal time complexity using a HashMap to store and look up numbers and their indices efficiently.
</div>
</div>

