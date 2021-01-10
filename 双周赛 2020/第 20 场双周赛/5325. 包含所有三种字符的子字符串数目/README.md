# 包含所有三种字符的子字符串数目

给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：
给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

示例 1：

``` javascript
输入：s = "abcabc"
输出：10
解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。
```

示例 2：

``` javascript
输入：s = "aaacb"
输出：3
解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。
```

示例 3：

``` javascript
输入：s = "abc"
输出：1
```

提示：

- 3 <= s.length <= 5 x 10^4
- s 只包含字符 a，b 和 c 。

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|136 / 100|36.3 / 100|[正常解法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/number-of-substrings-containing-all-three-characters

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
