# 分割字符频率相等的最少子字符串

给你一个字符串 `s` ，你需要将它分割成一个或者更多的 **平衡** 子字符串。比方说，`s == "ababcc"` 那么 `("abab", "c", "c")` ，`("ab", "abc", "c")` 和 `("ababcc")` 都是合法分割，但是 `("a", "bab", "cc")` ，`("aba", "bc", "c")` 和 `("ab", "abcc")` 不是，不平衡的子字符串用粗体表示。

请你返回 `s` **最少** 能分割成多少个平衡子字符串。

**注意：** 一个 **平衡** 字符串指的是字符串中所有字符出现的次数都相同。

**示例 1：**

``` javascript
输入：s = "fabccddg"

输出：3

解释：

我们可以将 s 分割成 3 个子字符串：("fab, "ccdd", "g") 或者 ("fabc", "cd", "dg") 。
```

**示例 2：**

``` javascript
输入：s = "abababaccddb"

输出：2

解释：

我们可以将 s 分割成 2 个子字符串：("abab", "abaccddb") 。
```

**提示：**

- `1 <= s.length <= 1000`
- `s` 只包含小写英文字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|139 / 85.71|55.39 / 100.00|[动态规划](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-substring-partition-of-equal-character-frequency

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
