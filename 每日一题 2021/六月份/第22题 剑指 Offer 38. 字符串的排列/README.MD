# 字符串的排列

输入一个字符串，打印出该字符串中字符的所有排列。

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

**示例:**

``` javascript
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
```

**限制：**

1 <= s 的长度 <= 8

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|696 / 8.82|59.7 / 5.02|[剪枝深度优先](./javascript/ac_v1.js)
2|javascript|236 / 21.82|49.1 / 19.81|[深度优先优化](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
