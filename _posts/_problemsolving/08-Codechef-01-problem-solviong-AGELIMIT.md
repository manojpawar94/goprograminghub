---
title: "Codechef 01 : Problem Code: AGELIMIT"
excerpt: "Chef wants to appear in a competitive exam. To take the exam, there are following requirements, Minimum age limit is X and Age should be strictly less than Y"
createdAt: "2021-05-03"
author: manoj-pawar
---

#### Problem

Chef wants to appear in a competitive exam. To take the exam, there are following requirements:

- Minimum age limit is X (i.e. Age should be greater than or equal to X).
- Age should be strictly less than Y.

Chef's current Age is AA. Find whether he is currently eligible to take the exam or not.

##### Input Format

- First line will contain TT, number of test cases. Then the test cases follow.
- Each test case consists of a single line of input, containing three integers X, Y and A as mentioned in the statement.

##### Output Format

- For each test case, output YES if Chef is eligible to give the exam, NO otherwise.
- You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).

##### Constraints

> - 1 ≤ T ≤ 1000
> - 20 ≤ X <Y ≤ 40
> - 10 ≤ A ≤50

##### Sample 1:

| Input    | Output |
| -------- | ------ |
| 5        |        |
| 21 34 30 | YES    |
| 25 31 31 | NO     |
| 22 29 25 | YES    |
| 20 40 15 | NO     |
| 28 29 28 | YES    |

###### Explanation:

Test case 11: The age of Chef is 30. His age satisfies the minimum age limit as 30 ≥ 21. Also, it is less than the upper limit as 30 < 34. Thus, Chef is eligible to take the exam.

Test case 22: The age of Chef is 31. His age satisfies the minimum age limit as 31 ≥ 25. But, it is not less than the upper limit as 31 < 31. Thus, Chef is not eligible to take the exam.

Test case 33: The age of Chef is 25. His age satisfies the minimum age limit as 25 ≥ 22. Also, it is less than the upper limit as 25 < 29. Thus, Chef is eligible to take the exam.

Test case 44: The age of Chef is 15. His age does not satisfy the minimum age limit as 15 < 20. Thus, Chef is not eligible to take the exam.

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

class Codechef
{
	public static void main (String[] args) throws Exception {
		Scanner in = new Scanner(System.in);
		
		int noOfTc = in.nextInt();
		
		for(int index = 0; index < noOfTc; index++) {
			String input = in.nextLine();

			while("".equals(input)) {
				input = in.nextLine();
			}
			String[] inputs = input.split(" ");
			
			int x = Integer.parseInt(inputs[0].trim());
			int y = Integer.parseInt(inputs[1].trim());
			int age = Integer.parseInt(inputs[2].trim());

			if (age >= x && age < y) {
				System.out.println("YES");
			} else {
				System.out.println("NO");
			}
		}
	}
}
```

The provided Java code is a solution for the "AGELIMIT" problem on CodeChef. The problem involves determining whether a person is eligible to take an exam based on their age. Here's how the code works:

1. The `main` method reads the number of test cases (`noOfTc`) from input.
2. For each test case, it reads a line of input containing three integers `X`, `Y`, and `A`.
3. The `while` loop is used to handle any empty lines in the input.
4. The input line is split using space as the delimiter, resulting in an array `inputs` containing the three values.
5. The integer values `x`, `y`, and `age` are parsed from the `inputs` array.
6. The code then checks if the age is greater than or equal to `x` and strictly less than `y`. If this condition is satisfied, it prints "YES". Otherwise, it prints "NO".

The solution effectively processes the input test cases and determines whether the person is eligible to take the exam based on the given age limits.

Please note that this code assumes the input follows the provided format and does not include extensive error handling. It's also worth noting that the problem description specifies that 1 ≤ T ≤ 1000, 20 ≤ X < Y ≤ 40, and 10 ≤ A ≤ 50.
</div>
</div>
