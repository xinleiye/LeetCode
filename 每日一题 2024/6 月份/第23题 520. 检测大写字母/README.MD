# 检测大写字母

我们定义，在以下情况时，单词的大写用法是正确的：

- 全部字母都是大写，比如 `"USA"` 。
- 单词中所有字母都不是大写，比如 `"leetcode"` 。
- 如果单词不只含有一个字母，只有首字母大写， 比如 `"Google"` 。

给你一个字符串 `word` 。如果大写用法正确，返回 `true` ；否则，返回 `false` 。

**示例 1：**

``` javascript
输入：word = "USA"
输出：true
```

**示例 2：**

``` javascript
输入：word = "FlaG"
输出：false
```

**提示：**

- `1 <= word.length <= 100`
- `word` 由小写和大写英文字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|69 / 20.35|49.76 / 23.89|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/detect-capital

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
