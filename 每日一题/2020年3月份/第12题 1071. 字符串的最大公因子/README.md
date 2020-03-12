# 字符串的最大公因子

对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

示例 1：

``` javascript
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

示例 2：

``` javascript
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

示例 3：

``` javascript
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

提示：

- 1 <= str1.length <= 1000
- 1 <= str2.length <= 1000
- str1[i] 和 str2[i] 为大写英文字母

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 67.68|35.8 / 6.25|[暴力](./javascript/ac_v1.js)
2|javascript|64 / 83.84|34 / 81.25|[字符串GCD](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/greatest-common-divisor-of-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。。
