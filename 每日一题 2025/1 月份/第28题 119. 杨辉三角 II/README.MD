# 杨辉三角 II

给定一个非负索引 `rowIndex`，返回「杨辉三角」的第 `rowIndex` 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

![题目说明](./question.gif)

**示例 1:**

``` javascript
输入: rowIndex = 3
输出: [1,3,3,1]
```

**示例 2:**

``` javascript
输入: rowIndex = 0
输出: [1]
```

**示例 3:**

``` javascript
输入: rowIndex = 1
输出: [1,1]
```

**提示:**

- `0 <= rowIndex <= 33`

**进阶:**

你可以优化你的算法到 *`O(rowIndex)`* 空间复杂度吗？

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|1 / 84.03|49.23 / 67.71|[朴素方法](./javascript/ac_v1.js)
2|javascript|0 / 100.00|49.25 / 65.28|[递推](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/pascals-triangle-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
