---
title: "Codechef 01 : Practice makes us perfect PRACTICEPERF"
excerpt: "Find the number of weeks in which Chef solved at least 10 problems from 4 weeks."
createdAt: "2021-05-03"
author: manoj-pawar
---

<div class="row">
<div class="col-sm-6">

#### Problem

Most programmers will tell you that one of the ways to improve your performance in competitive programming is to practice a lot of problems.

Our Chef took the above advice very seriously and decided to set a target for himself.

- Chef decides to solve at least 10 problems every week for 4 weeks.

Given the number of problems he actually solved in each week over 4 weeks as P1, P2, P3, P4 output the number of weeks in which Chef met his target.

##### Input Format

There is a single line of input, with 4 integers P1, P2, P3, P4. These are the number of problems solved by Chef in each of the 4 weeks.

##### Output Format

Output a single integer in a single line - the number of weeks in which Chef solved at least 10 problems.

##### Constraints

> 1 ≤ PP1, P2, P3, P4 ≤ 100

##### Sample 1:

| Input      | Output |
| ---------- | ------ |
| 12 15 8 10 | 3      |

###### Explanation:

Chef solved at least 1010 problems in the first, second and fourth weeks. He failed to solve at least 1010 problems in the third week. Hence, the number of weeks in which Chef met his target is 33.

##### Sample 2:

| Input    | Output |
| -------- | ------ |
| 2 3 1 10 | 1      |

###### Explanation:

Chef solved at least 1010 problems in the fourth week. He failed to solve at least 1010 problems in all the other three weeks. Hence, the number of weeks in which Chef met his target is 11.

##### Sample 3:

| Input        | Output |
| ------------ | ------ |
| 12 100 99 11 | 4      |

###### Explanation:

Chef solved at least 1010 problems in all the four weeks. Hence, the number of weeks in which Chef met his target is 44.

##### Sample 4:

| Input   | Output |
| ------- | ------ |
| 1 1 1 1 | 0      |

###### Explanation:

Chef was not able to solve at least 1010 problems in any of the four weeks. Hence, the number of weeks in which Chef met his target is 00

</div>
<div class="col-sm-6">

#### Solution : Java

```java
/* package codechef; // don't place package name! */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here
	}
}
```

</div>
</div>
