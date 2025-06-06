# 元音辅音字符串计数 II

给你一个字符串 `word` 和一个 **非负** 整数 `k`。

返回 `word` 的 **子字符串** 中，每个元音字母（`'a'`、`'e'`、`'i'`、`'o'`、`'u'`）**至少** 出现一次，并且 **恰好** 包含 `k` 个辅音字母的子字符串的总数。

**示例 1：**

``` javascript
输入：word = "aeioqq", k = 1

输出：0

解释：

不存在包含所有元音字母的子字符串。
```

**示例 2：**

``` javascript
输入：word = "aeiou", k = 0

输出：1

解释：

唯一一个包含所有元音字母且不含辅音字母的子字符串是 word[0..4]，即 "aeiou"。
```

**示例 3：**

``` javascript
输入：word = "ieaouqqieaouqq", k = 1

输出：3

解释：

包含所有元音字母并且恰好含有一个辅音字母的子字符串有：

word[0..5]，即 "ieaouq"。
word[6..11]，即 "qieaou"。
word[7..12]，即 "ieaouq"。
```

**提示：**

- `5 <= word.length <= 2 * 10^5`
- `word` 仅由小写英文字母组成。
- `0 <= k <= word.length - 5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|463 / 42.86|70.08 / 27.14|[滑动窗口](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
