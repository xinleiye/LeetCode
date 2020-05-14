# Minimum ASCII Delete Sum for Two Strings

Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

**Example 1:**

``` javascript
Input: s1 = "sea", s2 = "eat"
Output: 231
Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
```

**Example 2:**

``` javascript
Input: s1 = "delete", s2 = "leet"
Output: 403
Explanation: Deleting "dee" from "delete" to turn the string into "let",
adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
```

**Note:**
- 0 < s1.length, s2.length <= 1000.
- All elements of each string will have an ASCII value in [97, 122].

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|c|20 / 82.19|5.9 / 100|[动态规划](./c/ac_v1.c)
2|c|24 / 68.49|13.9 / 100|[动态规划](./c/ac_v2.c)
3|javascript|96 / 83.33|41.7 / 100|[动态规划](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
