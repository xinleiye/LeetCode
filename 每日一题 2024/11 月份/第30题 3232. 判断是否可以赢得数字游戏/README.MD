# 判断是否可以赢得数字游戏

给你一个 **正整数** 数组 `nums`。

Alice 和 Bob 正在玩游戏。在游戏中，Alice 可以从 `nums` 中选择所有个位数 **或** 所有两位数，剩余的数字归 Bob 所有。如果 Alice 所选数字之和 **严格大于** Bob 的数字之和，则 Alice 获胜。

如果 Alice 能赢得这场游戏，返回 `true`；否则，返回 `false`。

**示例 1：**

``` javascript
输入：nums = [1,2,3,4,10]

输出：false

解释：

Alice 不管选个位数还是两位数都无法赢得比赛。
```

**示例 2：**

``` javascript
输入：nums = [1,2,3,4,5,14]

输出：true

解释：

Alice 选择个位数可以赢得比赛，所选数字之和为 15。
```

**示例 3：**

``` javascript
输入：nums = [5,5,5,25]

输出：true

解释：

Alice 选择两位数可以赢得比赛，所选数字之和为 25。
```

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 99`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|2 / 71.11|51.50 / 44.59|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-if-digit-game-can-be-won

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
