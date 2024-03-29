# 将数组划分成若干好子数组的方式

给你一个二元数组 `nums` 。

如果数组中的某个子数组 **恰好** 只存在 一 个值为 `1` 的元素，则认为该子数组是一个 **好子数组** 。

请你统计将数组 `nums` 划分成若干 **好子数组** 的方法数，并以整数形式返回。由于数字可能很大，返回其对 `10^9 + 7` **取余** 之后的结果。

子数组是数组中的一个连续 **非空** 元素序列。

**示例 1：**

``` javascript
输入：nums = [0,1,0,0,1]
输出：3
解释：存在 3 种可以将 nums 划分成若干好子数组的方式：
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]
```

**示例 2：**

``` javascript
输入：nums = [0,1,0]
输出：1
解释：存在 1 种可以将 nums 划分成若干好子数组的方式：
- [0,1,0]
```

**提示：**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 1`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|112 / 100.00|57.5 / 100.00|[前缀乘](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/ways-to-split-array-into-good-subarrays

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
