# 两个字符串的删除操作

给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。

**示例：**

``` javascript
输入: "sea", "eat"
输出: 2
解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
```

**提示：**

- 给定单词的长度不超过500。
- 给定单词中的字符只含有小写字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|108 / 72.76|43.6 / 96.11|[动态规划](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/delete-operation-for-two-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
