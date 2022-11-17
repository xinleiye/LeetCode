# 匹配子序列的单词数

给定字符串 `s` 和字符串数组 `words`, 返回 *`words[i]` 中是 `s` 的子序列的单词个数* 。

字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。

- 例如， `“ace”` 是 `“abcde”` 的子序列。

**示例 1:**

``` javascript
输入: s = "abcde", words = ["a","bb","acd","ace"]
输出: 3
解释: 有三个是 s 的子序列的单词: "a", "acd", "ace"。
```

**示例 2:**

``` javascript
输入: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
输出: 2
```

**提示:**

- `1 <= s.length <= 5 * 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 50`
- `words[i]` 和 `s` 都只由小写字母组成。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|136 / 91.67|56 / 26.67|[二分查找](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/number-of-matching-subsequences

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
