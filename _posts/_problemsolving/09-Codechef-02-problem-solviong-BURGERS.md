---
title: "Codechef 02 : Problem Code: BURGERS"
excerpt: "Chef is fond of burgers and decided to make as many burgers as possible. Chef has A patties and B buns. To make 1 burger, Chef needs 1 patty and 1 bun.
Find the maximum number of burgers that Chef can make."
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Chef is fond of burgers and decided to make as many burgers as possible. Chef has A patties and B buns. To make 1 burger, Chef needs 1 patty and 1 bun.

Find the maximum number of burgers that Chef can make.

##### Input Format

-   The first line of input will contain an integer TT — the number of test cases. The description of T test cases follows.
-   The first and only line of each test case contains two space-separated integers A and B, the number of patties and buns respectively.

##### Output Format

For each test case, output the maximum number of burgers that Chef can make.

##### Constraints

> -   1 ≤ T ≤ 1000
> -   1 ≤ A, B ≤ 10^5

##### Sample 1:

| Input | Output |
| ----- | ------ |
| 4     |        |
| 2 2   | 2      |
| 2 3   | 2      |
| 3 2   | 2      |
| 23 17 | 17     |

###### Explanation:

Explanation:
Test case 1: Chef has 2 patties and 2 buns, and therefore Chef can make 2 burgers.

Test case 2: Chef has 2 patties and 3 buns. Chef can make at most 2 burgers by using 2 patties and 2 buns.

Test case 3: Chef has 3 patties and 2 buns. Chef can make at most 2 burgers by using 2 patties and 2 buns.

Test case 4: Chef has 23 patties and 17 buns. Chef can make at most 17 burgers by using 17 patties and 17 buns.

#### Solution

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Java</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
  ```java[class="line-numbers"]
import java.util.Scanner;

class Codechef {

    public static void main (String[] args) throws Exception {
        Scanner in = new Scanner(System.in);

        int noOfTc = in.nextInt();

        while(noOfTc-- > 0 ){
            int patties = in.nextInt();
            int buns = in.nextInt();

            System.out.println(patties > buns ? buns : patties);
        }
    }

}

```

The above solution is for the "BURGERS" problem on CodeChef. The problem involves calculating the maximum number of burgers that Chef can make given a certain number of patties and buns. Here's how the code works:

1. The `main` method reads the number of test cases (`noOfTc`) from input.
2. A loop iterates through each test case:
   a. It reads the number of patties and buns from input.
   b. The code then calculates the maximum number of burgers that can be made by taking the minimum of the number of patties and buns.
   c. The result is printed.

The solution effectively processes the input test cases and calculates the maximum number of burgers that can be made based on the available patties and buns.

Please note that this code assumes the input follows the provided format and does not include extensive error handling.
</div>
</div>
```
