# 设计相邻元素求和服务

给你一个 `n x n` 的二维数组 `grid`，它包含范围 `[0, n^2 - 1]` 内的 **不重复** 元素。

实现 `neighborSum` 类：

- `neighborSum(int [][]grid)` 初始化对象。
- `int adjacentSum(int value)` 返回在 `grid` 中与 `value` 相邻的元素之 **和**，相邻指的是与 `value` 在上、左、右或下的元素。
- `int diagonalSum(int value)` 返回在 `grid` 中与 `value` 对角线相邻的元素之 **和**，对角线相邻指的是与 `value` 在左上、右上、左下或右下的元素。

![题目说明](./question.png)

**示例 1：**

``` javascript
输入：

["neighborSum", "adjacentSum", "adjacentSum", "diagonalSum", "diagonalSum"]

[[[[0, 1, 2], [3, 4, 5], [6, 7, 8]]], [1], [4], [4], [8]]

输出： [null, 6, 16, 16, 4]

解释：
```

![示例1](./eg1.png)

``` javascript
1 的相邻元素是 0、2 和 4。
4 的相邻元素是 1、3、5 和 7。
4 的对角线相邻元素是 0、2、6 和 8。
8 的对角线相邻元素是 4。
```

**示例 2：**

``` javascript
输入：

["neighborSum", "adjacentSum", "diagonalSum"]

[[[[1, 2, 0, 3], [4, 7, 15, 6], [8, 9, 10, 11], [12, 13, 14, 5]]], [15], [9]]

输出： [null, 23, 45]

解释：
```

![示例2](./eg2.png)

``` javascript
15 的相邻元素是 0、10、7 和 6。
9 的对角线相邻元素是 4、12、14 和 15。
```

**提示：**

- `3 <= n == grid.length == grid[0].length <= 10`
- `0 <= grid[i][j] <= n^2 - 1`
- 所有 `grid[i][j]` 值均不重复。
- `adjacentSum` 和 `diagonalSum` 中的 `value` 均在范围 `[0, n^2 - 1]` 内。
- 最多会调用 `adjacentSum` 和 `diagonalSum` 总共 `2 * n^2` 次。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|31 / 51.40|60.03 / 37.87|[预处理](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/design-neighbor-sum-service

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
