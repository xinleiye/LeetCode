# 字符串及其反转中是否存在同一子字符串

给你一个字符串 `s` ，请你判断字符串 `s` 是否存在一个长度为 `2` 的子字符串，在其反转后的字符串中也出现。

如果存在这样的子字符串，返回 `true`；如果不存在，返回 `false` 。

**示例 1：**

``` javascript
输入：s = "leetcode"

输出：true

解释：子字符串 "ee" 的长度为 2，它也出现在 reverse(s) == "edocteel" 中。
```

**示例 2：**

``` javascript
输入：s = "abcba"

输出：true

解释：所有长度为 2 的子字符串 "ab"、"bc"、"cb"、"ba" 也都出现在 reverse(s) == "abcba" 中。
```

**示例 3：**

``` javascript
输入：s = "abcd"

输出：false

解释：字符串 s 中不存在满足「在其反转后的字符串中也出现」且长度为 2 的子字符串。
```

**提示：**

- `1 <= s.length <= 100`
- 字符串 `s` 仅由小写英文字母组成。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|1 / 95.45|52.29 / 10.53|[位运算优化](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/existence-of-a-substring-in-a-string-and-its-reverse

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
