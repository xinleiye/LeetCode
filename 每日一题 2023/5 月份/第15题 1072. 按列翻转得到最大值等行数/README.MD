# 按列翻转得到最大值等行数

给定 `m x n` 矩阵 `matrix` 。

你可以从中选出任意数量的列并翻转其上的 **每个** 单元格。（即翻转后，单元格的值从 `0` 变成 `1`，或者从 `1` 变为 `0` 。）

返回 *经过一些翻转后，行与行之间所有值都相等的最大行数* 。

**示例 1：**

``` javascript
输入：matrix = [[0,1],[1,1]]
输出：1
解释：不进行翻转，有 1 行所有值都相等。
```

**示例 2：**

``` javascript
输入：matrix = [[0,1],[1,0]]
输出：2
解释：翻转第一列的值之后，这两行都由相等的值组成。
```

**示例 3：**

``` javascript
输入：matrix = [[0,0,0],[0,0,1],[1,1,0]]
输出：2
解释：翻转前两列的值之后，后两行由相等的值组成。
```

**提示：**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `matrix[i][j] == 0` 或 `1`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|104 / 83.33|50 / 100|[哈希](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
