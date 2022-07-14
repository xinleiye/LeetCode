# 前缀和后缀搜索

设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

实现 `WordFilter` 类：

- `WordFilter(string[] words)` 使用词典中的单词 `words` 初始化对象。
- `f(string pref, string suff)` 返回词典中具有前缀 `prefix` 和后缀 `suff` 的单词的下标。如果存在不止一个满足要求的下标，返回其中 **最大的下标** 。如果不存在这样的单词，返回 `-1` 。

**示例：**

``` javascript
输入
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
输出
[null, 0]
解释
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。
```

**提示：**

- `1 <= words.length <= 10^4`
- `1 <= words[i].length <= 7`
- `1 <= pref.length, suff.length <= 7`
- `words[i]`、`pref` 和 `suff` 仅由小写英文字母组成
- 最多对函数 `f` 执行 `10^4` 次调用

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|888 / 20.00|86.7 / 20.00|[前后缀组合&哈希](./javascript/ac_v1.js)
2|javascript|4628 / 20.00|80.4 / 20.00|[字典树](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/prefix-and-suffix-search

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
