# Greatest Common Divisor of Strings

For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
Return the largest string X such that X divides str1 and X divides str2.
 
Example 1:

``` javascript
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

Example 2:

``` javascript
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```
Example 3:

``` javascript
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

Note:
- 1 <= str1.length <= 1000
- 1 <= str2.length <= 1000
- str1[i] and str2[i] are English uppercase letters.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|64 / 33.61|35.6 / 100.00|[暴力](./javascript/ac_v1.js)
2|javascript|56 / 71.78|33.8 / 100.00|[字符串GCD](./javascript/ac_v2.js)

来源：LeetCode

链接：https://leetcode.com/problems/greatest-common-divisor-of-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
