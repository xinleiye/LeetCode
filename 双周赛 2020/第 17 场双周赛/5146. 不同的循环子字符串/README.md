# 不同的循环子字符串

给你一个字符串 text ，请你返回满足下述条件的 不同 非空子字符串的数目：这些子字符串可以写成某个字符串与其自身的串联。

示例 1：

``` javascript
输入：text = "abcabcabc"
输出：3
解释：3 个子字符串分别为 "abcabc" ， "bcabca" 和 "cabcab" 。
```

示例 2：

``` javascript
输入：text = "leetcodeleetcode"
输出：2
解释：2 个子字符串为 "ee" 和 "leetcodeleetcode" 。
```

提示：

- 1 <= text.length <= 2000
- text 只包含小写英文字母。

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|2140 / 100|42.2 / 100|[正常解法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/distinct-echo-substrings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
