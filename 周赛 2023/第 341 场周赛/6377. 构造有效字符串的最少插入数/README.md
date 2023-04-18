# 构造有效字符串的最少插入数

给你一个字符串 `word` ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 `word` **有效** 需要插入的最少字母数。

如果字符串可以由 "abc" 串联多次得到，则认为该字符串 **有效** 。

**示例 1：**

``` javascript
输入：word = "b"
输出：2
解释：在 "b" 之前插入 "a" ，在 "b" 之后插入 "c" 可以得到有效字符串 "abc" 。
```

**示例 2：**

``` javascript
输入：word = "aaa"
输出：6
解释：在每个 "a" 之后依次插入 "b" 和 "c" 可以得到有效字符串 "abcabcabc" 。
```

**示例 3：**

``` javascript
输入：word = "abc"
输出：0
解释：word 已经是有效字符串，不需要进行修改。 
```

**提示：**

- `1 <= word.length <= 50`
- `word` 仅由字母 "a"、"b" 和 "c" 组成。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|80 / 100.00|43.5 / 100.00|[贪心](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-additions-to-make-valid-string

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
