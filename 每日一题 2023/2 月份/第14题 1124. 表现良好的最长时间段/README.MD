# 表现良好的最长时间段

给你一份工作时间表 `hours`，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数大于 `8` 小时的时候，那么这一天就是「**劳累的一天**」。

所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 **大于**「不劳累的天数」。

请你返回「表现良好时间段」的最大长度。

**示例 1：**

``` javascript
输入：hours = [9,9,6,0,6,6,9]
输出：3
解释：最长的表现良好时间段是 [9,9,6]。
```

**示例 2：**

``` javascript
输入：hours = [6,6,6]
输出：0
```

**提示：**

- `1 <= hours.length <= 10^4`
- `0 <= hours[i] <= 16`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 98.77|43.5 / 76.54|[前缀和&单调队列](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/longest-well-performing-interval

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
