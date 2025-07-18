# 从盒子中找出字典序最大的字符串 I

给你一个字符串 `word` 和一个整数 `numFriends`。

Alice 正在为她的 `numFriends` 位朋友组织一个游戏。游戏分为多个回合，在每一回合中：

- `word` 被分割成 `numFriends` 个 **非空** 字符串，且该分割方式与之前的任意回合所采用的都 **不完全相同** 。
- 所有分割出的字符串都会被放入一个盒子中。

在所有回合结束后，找出盒子中 **字典序最大** 的字符串。

**示例 1：**

``` javascript
输入: word = "dbca", numFriends = 2

输出: "dbc"

解释: 

所有可能的分割方式为：

"d" 和 "bca"。
"db" 和 "ca"。
"dbc" 和 "a"。
```

**示例 2：**

``` javascript
输入: word = "gggg", numFriends = 4

输出: "g"

解释: 

唯一可能的分割方式为："g", "g", "g", 和 "g"。
```

**提示：**

- `1 <= word.length <= 5 * 10^3`
- `word` 仅由小写英文字母组成。
- `1 <= numFriends <= word.length`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
------|----------|-----------------|----------------|--------
1|javascript|2 / 100.00|56.34 / 83.33|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-the-lexicographically-largest-string-from-the-box-i

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
