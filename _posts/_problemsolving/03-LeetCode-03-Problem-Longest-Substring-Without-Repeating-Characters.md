---
title: "LeetCode 03 : Longest Substring Without Repeating Characters"
excerpt: "Given a string s, find the length of the longest substring without repeating characters."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Given a string s, find the length of the longest substring without repeating characters.

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
  
  ```java[class="line-numbers"]
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

The above solution is for the "Longest Substring Without Repeating Characters" problem using the sliding window technique. It efficiently finds the length of the longest substring without repeating characters within a given string `s`. Here's how the code works:

1. The `lengthOfLongestSubstring` function takes a string `s` as input and returns an integer representing the length of the longest substring without repeating characters.
2. It initializes an array `chars` of size 128 to keep track of character occurrences.
3. The `left` and `right` pointers represent the sliding window. `left` points to the start of the current substring, and `right` points to the end.
4. `res` keeps track of the length of the longest substring without repeating characters.
5. The loop iterates while the `right` pointer is within the bounds of the string `s`.
6. Inside the loop:
   - The character at index `right` is fetched from the string.
   - The count of the character is incremented in the `chars` array.
   - A nested loop (`while (chars[r] > 1)`) runs while the character count becomes greater than 1 (indicating a repeating character). In this loop:
     - The character at index `left` is fetched.
     - The count of the character is decremented in the `chars` array.
     - The `left` pointer is moved one step to the right.
   - The length of the current substring (`right - left + 1`) is compared with the current `res`, and the maximum value is stored in `res`.
   - The `right` pointer is moved one step to the right.
7. Finally, the function returns the value of `res`.

The sliding window technique allows the algorithm to efficiently find the longest substring without repeating characters by maintaining a sliding window with unique characters. The code is well-structured and effectively solves the problem.

Please note that the code assumes that the input string `s` only consists of ASCII characters, which is why an array of size 128 is used.
</div>
</div>