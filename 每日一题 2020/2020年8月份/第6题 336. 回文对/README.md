# 回文对

给定一组 **唯一** 的单词， 找出所有 **不同** 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

**示例 1:**

``` javascript
输入: ["abcd","dcba","lls","s","sssll"]
输出: [[0,1],[1,0],[3,2],[2,4]] 
解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
```

**示例 2:**

``` javascript
输入: ["bat","tab","cat"]
输出: [[0,1],[1,0]] 
解释: 可拼接成的回文串为 ["battab","tabbat"]
```

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|316 / 92.96|53.2 / 33.33|[字典树](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/palindrome-pairs

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
