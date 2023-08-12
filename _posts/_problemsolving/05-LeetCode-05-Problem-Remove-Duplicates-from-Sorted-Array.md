---
title: "LeetCode 05 : Remove Duplicates from Sorted Array"
excerpt: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

##### Custom Judge:

The judge will test your solution with the following code:

```c
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

##### Example 1:

```shell
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

##### Example 2:

```shell
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

##### Constraints

> - 1 <= nums.length <= 3 \* 10^4
> - -100 <= nums[i] <= 100
> - nums is sorted in non-decreasing order.

#### Solution

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Go Lang</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  ```go[class="line-numbers"]
func removeDuplicates(nums []int) int {
	// checking the duplicate element
	length := len(nums)

    if length == 0 {
    	return 0
    }

    numOfDuplicate := 0
    lastNum := nums[length-1]
    isPresent := false
    value := nums[0]

    for index := 0; index < length; index++ {

    	if value > lastNum {
    		nums[index] = 0
    		numOfDuplicate++
    	}

    	for !isPresent {
    		for itr := index; itr < length; itr++ {
    			if nums[itr] == value {
    				isPresent = true
    				break
    			}
    		}

    		if isPresent {
    			break
    		} else {
    			value++
    		}

    		if value > lastNum {
    			break
    		}
    	}

    	if isPresent {
    		nums[index] = value
    		value++
    	}

    	isPresent = false
    }

    fmt.Printf("%v", nums)

    return length - numOfDuplicate

}
```

The above solution is for the "Remove Duplicates from Sorted Array" problem. It removes duplicate elements from a sorted integer array in-place and returns the new length of the array after removing the duplicates. Here's how the code works:

1. The `removeDuplicates` function takes a slice of integers `nums` as input and returns an integer representing the new length of the array after removing duplicates.
2. It first checks if the length of the array is 0, in which case it returns 0 since there are no elements to process.
3. The variables `numOfDuplicate`, `lastNum`, `isPresent`, and `value` are initialized.
4. The loop iterates through the array, and for each element:
   - If `value` is greater than `lastNum`, it means that there are no more valid elements to consider, so the current element is set to 0, and `numOfDuplicate` is incremented.
   - A nested loop (`for !isPresent`) searches for the next valid value that is not a duplicate. If found, `isPresent` is set to true and the loop breaks.
   - If `isPresent` is true, the current element is set to `value`, and `value` is incremented.
5. Finally, the function prints the modified array and returns the length of the array after removing duplicates (`length - numOfDuplicate`).

The solution primarily relies on the logic to remove duplicates by iterating through the array and keeping track of the current value to be assigned to valid elements. It follows the in-place requirement by modifying the array directly.

Please note that the provided solution can be optimized further and there are more concise ways to achieve the same result using Go's features.
</div>
</div>

> **Original Problem:** https://leetcode.com/problems/maximum-subarray/