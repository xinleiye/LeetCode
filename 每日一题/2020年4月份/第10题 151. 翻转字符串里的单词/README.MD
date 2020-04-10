# 翻转字符串里的单词

给定一个字符串，逐个翻转字符串中的每个单词。

示例 1：

``` javascript
输入: "the sky is blue"
输出: "blue is sky the"
```

示例 2：

``` javascript
输入: "  hello world!  "
输出: "world! hello"
解释: 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
```

示例 3：

``` javascript
输入: "a good   example"
输出: "example good a"
解释: 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
```

说明：

- 无空格字符构成一个单词。
- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
- 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 

进阶：

- 请选用 C 语言的用户尝试使用 O(1) 额外空间复杂度的原地解法。

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 17.46|38.2 / 6.67|[感觉好蠢](./javascript/ac_v1.js)
2|javascript|88 / 15.79|34.8 / 93.3|[js字符串数组api](./javascript/ac_v2.js)
3|javascript|84 / 17.02|37.9 / 6.67|[翻转](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reverse-words-in-a-string

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
