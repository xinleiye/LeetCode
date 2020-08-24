# 重复的子字符串

给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

**示例 1:**

``` javascript
输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
```

**示例 2:**

``` javascript
输入: "aba"

输出: False
```

**示例 3:**

``` javascript
输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|132 / 9.20|40.8 / 26.67|[朴素方法](./javascript/ac_v1.js)
2|javascript|88 / 67.48|40.5 / 32.22|[字符串匹配](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/repeated-substring-pattern

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
