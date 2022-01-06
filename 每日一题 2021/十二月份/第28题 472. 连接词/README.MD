# 连接词

给你一个 **不含重复** 单词的字符串数组 `words` ，请你找出并返回 `words` 中的所有 **连接词** 。

**连接词** 定义为：一个完全由给定数组中的至少两个较短单词组成的字符串。

**示例 1：**

``` javascript
输入：words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
输出：["catsdogcats","dogcatsdog","ratcatdogcat"]
解释："catsdogcats" 由 "cats", "dog" 和 "cats" 组成;
     "dogcatsdog" 由 "dog", "cats" 和 "dog" 组成;
     "ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。
```

**示例 2：**

``` javascript
输入：words = ["cat","dog","catdog"]
输出：["catdog"]
```

**提示：**

- `1 <= words.length <= 1e4`
- `0 <= words[i].length <= 1000`
- `words[i]` 仅由小写字母组成
- `0 <= sum(words[i].length) <= 1e5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[字典树&深度优先](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/concatenated-words

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
