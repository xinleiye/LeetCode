# 有效的回旋镖

给定一个数组 `points` ，其中 `points[i] = [xi, yi]` 表示 **X-Y** 平面上的一个点，如果这些点构成一个 **回旋镖** 则返回 `true` 。

**回旋镖** 定义为一组三个点，这些点 **各不相同** 且 **不在一条直线上** 。

**示例 1：**

``` javascript
输入：points = [[1,1],[2,3],[3,2]]
输出：true
```

**示例 2：**

``` javascript
输入：points = [[1,1],[2,2],[3,3]]
输出：false
```

**提示：**

- `points.length == 3`
- `points[i].length == 2`
- `0 <= xi, yi <= 100`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|64 / 55.17|41.1 / 48.28|[点斜式](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/valid-boomerang

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
