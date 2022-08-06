---
title: "LeetCode 03 : Longest Substring Without Repeating Characters"
excerpt: "Given a string s, find the length of the longest substring without repeating characters."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

##### Example 1:

```shell
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

##### Example 2:

```shell
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

##### Example 3:

```shell
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

##### Constraints

> - 0 <= s.length <= 5 \* 104
> - s consists of English letters, digits, symbols and spaces.


#### Solution

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  ```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] chars = new int[128];

        int left = 0;
        int right = 0;

        int res = 0;
        while (right < s.length()) {
            char r = s.charAt(right);
            chars[r]++;

            while (chars[r] > 1) {
                char l = s.charAt(left);
                chars[l]--;
                left++;
            }

            res = Math.max(res, right - left + 1);

            right++;
        }
        return res;
    }

}
```

</div>
</div>