# 计算列车到站时间

给你一个正整数 `arrivalTime` 表示列车正点到站的时间（单位：小时），另给你一个正整数 `delayedTime` 表示列车延误的小时数。

返回列车实际到站的时间。

注意，该问题中的时间采用 24 小时制。

**示例 1：**

``` javascript
输入：arrivalTime = 15, delayedTime = 5
输出：20 
解释：列车正点到站时间是 15:00 ，延误 5 小时，所以列车实际到站的时间是 15 + 5 = 20（20:00）。
```

**示例 2：**

``` javascript
输入：arrivalTime = 13, delayedTime = 11
输出：0
解释：列车正点到站时间是 13:00 ，延误 11 小时，所以列车实际到站的时间是 13 + 11 = 24（在 24 小时制中表示为 00:00 ，所以返回 0）。
```

**提示：**

- `1 <= arrivaltime < 24`
- `1 <= delayedTime <= 24`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 39.26|40.18 / 85.19|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/calculate-delayed-arrival-time

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
