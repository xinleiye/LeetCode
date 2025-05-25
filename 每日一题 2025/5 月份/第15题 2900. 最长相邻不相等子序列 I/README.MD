# 最长相邻不相等子序列 I

给定一个字符串数组 `words` ，和一个 **二进制** 数组 `groups` ，两个数组长度都是 `n` 。

如果 `words` 的一个 **子序列** 是交替的，那么对于序列中的任意两个连续字符串，它们在 `groups` 中相同索引的对应元素是 **不同** 的（也就是说，不能有连续的 0 或 1），

你需要从 `words` 中选出 **最长交替子序列**。

返回选出的子序列。如果有多个答案，返回 **任意** 一个。

**注意：** `words` 中的元素是不同的 。

**示例 1：**

``` javascript
输入： words = ["e","a","b"], groups = [0,0,1]
输出： ["e","b"]
解释： 一个可行的子序列是 [0,2] ，因为 groups[0] != groups[2] 。
所以一个可行的答案是 [words[0],words[2]] = ["e","b"] 。
另一个可行的子序列是 [1,2] ，因为 groups[1] != groups[2] 。
得到答案为 [words[1],words[2]] = ["a","b"] 。
这也是一个可行的答案。
符合题意的最长子序列的长度为 2 。
```

**示例 2：**

``` javascript
输入： words = ["a","b","c","d"], groups = [1,0,1,1]
输出： ["a","b","c"]
解释： 一个可行的子序列为 [0,1,2] 因为 groups[0] != groups[1] 且 groups[1] != groups[2] 。
所以一个可行的答案是 [words[0],words[1],words[2]] = ["a","b","c"] 。
另一个可行的子序列为 [0,1,3] 因为 groups[0] != groups[1] 且 groups[1] != groups[3] 。
得到答案为 [words[0],words[1],words[3]] = ["a","b","d"] 。
这也是一个可行的答案。
符合题意的最长子序列的长度为 3 。
```

**提示：**

- `1 <= n == words.length == groups.length <= 100`
- `1 <= words[i].length <= 10`
- `groups[i]` 是 `0` 或 `1`。
- `words` 中的字符串 **互不相同** 。
- `words[i]` 只包含小写英文字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|0 / 100.00|56.89 / 98.09|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-i

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
