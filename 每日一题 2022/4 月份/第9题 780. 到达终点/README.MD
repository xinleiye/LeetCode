# 到达终点

给定四个整数 `sx` , `sy` `，tx` 和 `ty`，如果通过一系列的 **转换** 可以从起点 `(sx, sy)` 到达终点 `(tx, ty)`，则返回 `true`，否则返回 `false`。

从点 `(x, y)` 可以 **转换** 到 `(x, x+y)`  或者 `(x+y, y)`。

**示例 1:**

``` javascript
输入: sx = 1, sy = 1, tx = 3, ty = 5
输出: true
解释:
可以通过以下一系列转换从起点转换到终点：
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)
```

**示例 2:**

``` javascript
输入: sx = 1, sy = 1, tx = 2, ty = 2 
输出: false
```

**示例 3:**

``` javascript
输入: sx = 1, sy = 1, tx = 1, ty = 1 
输出: true
```

**提示:**

- `1 <= sx, sy, tx, ty <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|52 / 100.00|40.8 / 60.00|[反向计算](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reaching-points

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
