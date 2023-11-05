# 重复的DNA序列

**DNA序列** 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

例如，"ACGAATTCCG" 是一个 **DNA序列** 。

在研究 **DNA** 时，识别 DNA 中的重复序列非常有用。

给定一个表示 **DNA序列** 的字符串 `s` ，返回所有在 DNA 分子中出现不止一次的 **长度为** `10` 的序列(子字符串)。你可以按 **任意顺序** 返回答案。

**示例 1：**

``` javascript
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
```

**示例 2：**

``` javascript
输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]
```

**提示：**

`0 <= s.length <= 10^5`
`s[i]=='A'`、`'C'`、`'G'` or `'T'`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 94.42|47.12 / 96.28|[哈希&滑动&位运算](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/repeated-dna-sequences

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
