# 前往目标的最小代价

给你一个数组 `start` ，其中 `start = [startX, startY]` 表示你的初始位置位于二维空间上的 `(startX, startY)` 。另给你一个数组 `target` ，其中 `target = [targetX, targetY]` 表示你的目标位置 `(targetX, targetY)` 。

从位置 `(x1, y1)` 到空间中任一其他位置 `(x2, y2)` 的代价是 `|x2 - x1| + |y2 - y1|` 。

给你一个二维数组 `specialRoads` ，表示空间中存在的一些特殊路径。其中 `specialRoads[i] = [x1i, y1i, x2i, y2i, costi]` 表示第 `i` 条特殊路径可以从 `(x1[i], y1[i])` 到 `(x2[i], y2[i])` ，但成本等于 `costi` 。你可以使用每条特殊路径任意次数。

返回从 `(startX, startY)` 到 `(targetX, targetY)` 所需的最小代价。

**示例 1：**

``` javascript
输入：start = [1,1], target = [4,5], specialRoads = [[1,2,3,3,2],[3,4,4,5,1]]
输出：5
解释：从 (1,1) 到 (4,5) 的最优路径如下：
- (1,1) -> (1,2) ，移动的代价是 |1 - 1| + |2 - 1| = 1 。
- (1,2) -> (3,3) ，移动使用第一条特殊路径，代价是 2 。
- (3,3) -> (3,4) ，移动的代价是 |3 - 3| + |4 - 3| = 1.
- (3,4) -> (4,5) ，移动使用第二条特殊路径，代价是 1 。
总代价是 1 + 2 + 1 + 1 = 5 。
可以证明无法以小于 5 的代价完成从 (1,1) 到 (4,5) 。
```

**示例 2：**

``` javascript
输入：start = [3,2], target = [5,7], specialRoads = [[3,2,3,4,4],[3,3,5,5,5],[3,4,5,6,6]]
输出：7
解释：最优路径是不使用任何特殊路径，直接以 |5 - 3| + |7 - 2| = 7 的代价从初始位置到达目标位置。
```

**提示：**

- `start.length == target.length == 2`
- `1 <= startX <= targetX <= 10^5`
- `1 <= startY <= targetY <= 10^5`
- `1 <= specialRoads.length <= 200`
- `specialRoads[i].length == 5`
- `startX <= x1i, x2i <= targetX`
- `startY <= y1i, y2i <= targetY`
- `1 <= costi <= 10^5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-cost-of-a-path-with-special-roads

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
