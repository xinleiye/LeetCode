# 连接两字母单词得到的最长回文串

给你一个字符串数组 `words` 。`words` 中每个元素都是一个包含 **两个** 小写英文字母的单词。

请你从 `words` 中选择一些元素并按 **任意顺序** 连接它们，并得到一个 **尽可能长的回文串** 。每个元素 **至多** 只能使用一次。

请你返回你能得到的最长回文串的 **长度** 。如果没办法得到任何一个回文串，请你返回 `0` 。

**回文串** 指的是从前往后和从后往前读一样的字符串。

**示例 1：**

``` javascript
输入：words = ["lc","cl","gg"]
输出：6
解释：一个最长的回文串为 "lc" + "gg" + "cl" = "lcggcl" ，长度为 6 。
"clgglc" 是另一个可以得到的最长回文串。
```

**示例 2：**

``` javascript
输入：words = ["ab","ty","yt","lc","cl","ab"]
输出：8
解释：最长回文串是 "ty" + "lc" + "cl" + "yt" = "tylcclyt" ，长度为 8 。
"lcyttycl" 是另一个可以得到的最长回文串。
```

**示例 3：**

``` javascript
输入：words = ["cc","ll","xx"]
输出：2
解释：最长回文串是 "cc" ，长度为 2 。
"ll" 是另一个可以得到的最长回文串。"xx" 也是。
```

**提示：**

- `1 <= words.length <= 1e5`
- `words[i].length == 2`
- `words[i]` 仅包含小写英文字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|352 / 100|59.2 / 100|[哈希](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-palindrome-by-concatenating-two-letter-words

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
