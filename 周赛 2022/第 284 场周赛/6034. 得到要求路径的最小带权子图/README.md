# 得到要求路径的最小带权子图

给你一个整数 `n` ，它表示一个 **带权有向** 图的节点数，节点编号为 `0` 到 `n - 1` 。

同时给你一个二维整数数组 `edges` ，其中 `edges[i] = [fromi, toi, weighti]` ，表示从 `fromi` 到 `toi` 有一条边权为 `weighti` 的 **有向** 边。

最后，给你三个 **互不相同** 的整数 `src1` ，`src2` 和 `dest` ，表示图中三个不同的点。

请你从图中选出一个 **边权和最小** 的子图，使得从 `src1` 和 `src2` 出发，在这个子图中，都 **可以** 到达 `dest` 。如果这样的子图不存在，请返回 `-1` 。

**子图** 中的点和边都应该属于原图的一部分。子图的边权和定义为它所包含的所有边的权值之和。

**示例 1：**

![示例1](./eg1.png)

``` javascript
输入：n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5
输出：9
解释：
上图为输入的图。
蓝色边为最优子图之一。
注意，子图 [[1,0,3],[0,5,6]] 也能得到最优解，但无法在满足所有限制的前提下，得到更优解。
```

**示例 2：**

![示例2](./eg2.png)

``` javascript
输入：n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 1, dest = 2
输出：-1
解释：
上图为输入的图。
可以看到，不存在从节点 1 到节点 2 的路径，所以不存在任何子图满足所有限制。
```

**提示：**

- `3 <= n <= 10^5`
- `0 <= edges.length <= 10^5`
- `edges[i].length == 3`
- `0 <= fromi, toi, src1, src2, dest <= n - 1`
- `fromi != toi`
- `src1` ，`src2` 和 `dest` 两两不同。
- `1 <= weight[i] <= 10^5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / 100|?? / 100|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-weighted-subgraph-with-the-required-paths

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
