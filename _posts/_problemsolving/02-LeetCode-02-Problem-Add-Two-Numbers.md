---
title: "LeetCode 02 : Add Two Numbers"
excerpt: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list"
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

##### Example 1:

<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;">

<br/>

```shell
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

##### Example 2:

```shell
Input: l1 = [0], l2 = [0]
Output: [0]
```

##### Example 3:

```shell
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

##### Constraints

> -   The number of nodes in each linked list is in the range [1, 100].
> -   0 <= Node.val <= 9
> -   It is guaranteed that the list represents a number that does not have leading zeros.

#### Solution

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
```java[class="line-numbers"]
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) {  this.val = val; this.next = next;  }
 * }
 */
import java.util.Objects;

class Solution {
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
int carry = 0;
ListNode head = null;
ListNode intermediate = null;

        while(l1 != null || l2 != null) {
            int sum = carry;

            if(l1 != null){
                sum += l1.val;
                l1 = l1.next;
            }

            if(l2 != null){
                sum += l2.val;
                l2 = l2.next;
            }

            carry = sum /10;

            ListNode node = new ListNode(sum % 10);

            if (Objects.isNull(head)) {
                head = intermediate = node;
            } else {
                intermediate.next = node;
                intermediate = intermediate.next;
            }
        }

        if (carry > 0) {
            intermediate.next = new ListNode(carry);
        }

        return head;
    }

}

```

The provided Java code represents a solution for adding two numbers that are represented as linked lists, where each node in the linked list contains a single digit of the number. The solution uses a straightforward approach to iterate through both linked lists and perform the addition, considering the carry value. Here's how the code works:

1. The `addTwoNumbers` function takes two linked list inputs `l1` and `l2`, which represent the two numbers to be added.
2. It initializes variables `carry`, `head`, and `intermediate`.
3. The loop iterates while either `l1` or `l2` has more digits or there's a carry value.
4. Inside the loop:
   - It calculates the sum of the digits along with the carry value.
   - Creates a new node with the least significant digit of the sum and potentially the carry from the previous step.
   - Updates the `intermediate` node's `next` pointer to the newly created node.
   - Moves to the next digit in both `l1` and `l2` if they exist.
   - Updates the `carry` for the next iteration.
5. After the loop, if there's still a carry left, it creates an additional node to represent it.
6. The `head` node is returned, which points to the beginning of the resulting linked list.

This code effectively performs the addition of two numbers represented as linked lists while considering carry values. It constructs the resulting linked list digit by digit and handles the carry properly.

Please note that you need to make sure the `ListNode` class is defined properly and imported.
</div>
</div>