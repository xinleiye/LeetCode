# 验证回文串 II

给你一个字符串 `s`，**最多** 可以从中删除一个字符。

请你判断 `s` 是否能成为回文字符串：如果能，返回 `true` ；否则，返回 `false` 。

**示例 1：**

``` javascript
输入：s = "aba"
输出：true
```

**示例 2：**

``` javascript
输入：s = "abca"
输出：true
解释：你可以删除字符 'c' 。
```

**示例 3：**

``` javascript
输入：s = "abc"
输出：false
```

**提示：**

- `1 <= s.length <= 10^5`
- `s` 由小写英文字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|12 / 37.17|57.03 / 30.97|[贪心](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/valid-palindrome-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
