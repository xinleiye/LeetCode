# 判断矩阵是否满足条件

给你一个大小为 `m x n` 的二维矩阵 `grid` 。你需要判断每一个格子 `grid[i][j]` 是否满足：

- 如果它下面的格子存在，那么它需要等于它下面的格子，也就是 `grid[i][j] == grid[i + 1][j]` 。
- 如果它右边的格子存在，那么它需要不等于它右边的格子，也就是 `grid[i][j] != grid[i][j + 1]` 。

如果 **所有** 格子都满足以上条件，那么返回 `true` ，否则返回 `false` 。

**示例 1：**

``` javascript
输入：grid = [[1,0,2],[1,0,2]]

输出：true

解释：
```

![示例1](./eg1.png)

``` javascript
网格图中所有格子都符合条件。
```

**示例 2：**

``` javascript
输入：grid = [[1,1,1],[0,0,0]]

输出：false

解释：
```

![示例2](./eg2.png)

``` javascript
同一行中的格子值都相等。
```

**示例 3：**

``` javascript
输入：grid = [[1],[2],[3]]

输出：false

解释：
```

![示例3](./eg3.png)

``` javascript
同一列中的格子值不相等。
```

**提示：**

- `1 <= n, m <= 10`
- `0 <= grid[i][j] <= 9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|72 / 56.82|51.54 / 75.00|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/check-if-grid-satisfies-conditions

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
