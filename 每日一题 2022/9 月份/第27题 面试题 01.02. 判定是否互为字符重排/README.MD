# 判定是否互为字符重排

给定两个字符串 `s1` 和 `s2`，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

**示例 1：**

``` javascript
输入: s1 = "abc", s2 = "bca"
输出: true
```

**示例 2：**

``` javascript
输入: s1 = "abc", s2 = "bad"
输出: false
```

**说明：**

- `0 <= len(s1) <= 100`
- `0 <= len(s2) <= 100`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|52 / 93.20|40.8 / 75.00|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/check-permutation-lcci

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
