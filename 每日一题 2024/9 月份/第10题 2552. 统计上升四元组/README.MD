# 统计上升四元组

给你一个长度为 `n` 下标从 **0** 开始的整数数组 `nums` ，它包含 `1` 到 `n` 的所有数字，请你返回上升四元组的数目。

如果一个四元组 `(i, j, k, l)` 满足以下条件，我们称它是上升的：

- `0 <= i < j < k < l < n` 且
- `nums[i] < nums[k] < nums[j] < nums[l]` 。

**示例 1：**

``` javascript
输入：nums = [1,3,2,4,5]
输出：2
解释：
- 当 i = 0 ，j = 1 ，k = 2 且 l = 3 时，有 nums[i] < nums[k] < nums[j] < nums[l] 。
- 当 i = 0 ，j = 1 ，k = 2 且 l = 4 时，有 nums[i] < nums[k] < nums[j] < nums[l] 。
没有其他的四元组，所以我们返回 2 。
```

**示例 2：**

``` javascript
输入：nums = [1,2,3,4]
输出：0
解释：只存在一个四元组 i = 0 ，j = 1 ，k = 2 ，l = 3 ，但是 nums[j] < nums[k] ，所以我们返回 0 。
```

**提示：**

- `4 <= nums.length <= 4000`
- `1 <= nums[i] <= nums.length`
- `nums` 中所有数字 互不相同 ，`nums` 是一个排列。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|196 / 0|55.79 / 0|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/count-increasing-quadruplets

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
