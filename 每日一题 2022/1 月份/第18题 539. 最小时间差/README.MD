# 最小时间差

给定一个 24 小时制（小时:分钟 "**HH:MM**"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

**示例 1：**

``` javascript
输入：timePoints = ["23:59","00:00"]
输出：1
```

**示例 2：**

``` javascript
输入：timePoints = ["00:00","23:59","00:00"]
输出：0
```

**提示：**

- `2 <= timePoints.length <= 2 * 1e4`
- `timePoints[i]` 格式为 "**HH:MM**"

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|112 / 19.81|42.3 / 19.81|[朴素方法](./javascript/ac_v1.js)
2|javascript|80 / 74.53|40.1 / 82.08|[抽屉原理](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-time-difference

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
