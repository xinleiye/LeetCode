# 形成目标字符串需要的最少字符串数 II

给你一个字符串数组 `words` 和一个字符串 `target`。

如果字符串 `x` 是 `words` 中 **任意** 字符串的 **前缀**，则认为 `x` 是一个 **有效** 字符串。

现计划通过 **连接** 有效字符串形成 `target` ，请你计算并返回需要连接的 **最少** 字符串数量。如果无法通过这种方式形成 `target`，则返回 `-1`。

**示例 1：**

``` javascript
输入： words = ["abc","aaaaa","bcdef"], target = "aabcdabc"

输出： 3

解释：

target 字符串可以通过连接以下有效字符串形成：

words[1] 的长度为 2 的前缀，即 "aa"。
words[2] 的长度为 3 的前缀，即 "bcd"。
words[0] 的长度为 3 的前缀，即 "abc"。
```

**示例 2：**

``` javascript
输入： words = ["abababab","ab"], target = "ababaababa"

输出： 2

解释：

target 字符串可以通过连接以下有效字符串形成：

words[0] 的长度为 5 的前缀，即 "ababa"。
words[0] 的长度为 5 的前缀，即 "ababa"。
```

**示例 3：**

``` javascript
输入： words = ["abcdef"], target = "xyz"

输出： -1
```

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 5 * 10^4`
- 输入确保 `sum(words[i].length) <= 10^5`。
- `words[i]` 只包含小写英文字母。
- `1 <= target.length <= 5 * 10^4`
- `target` 只包含小写英文字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-number-of-valid-strings-to-form-target-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
