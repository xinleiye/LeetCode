# 按字典序排在最后的子串

给你一个字符串 `s` ，找出它的所有子串并按字典序排列，返回排在最后的那个子串。

**示例 1：**

``` javascript
输入：s = "abab"
输出："bab"
解释：我们可以找出 7 个子串 ["a", "ab", "aba", "abab", "b", "ba", "bab"]。按字典序排在最后的子串是 "bab"。
```

**示例 2：**

``` javascript
输入：s = "leetcode"
输出："tcode"
```

**提示：**

- `1 <= s.length <= 4 * 10^5`
- `s` 仅含有小写英文字符。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[双指针](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/last-substring-in-lexicographical-order

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
