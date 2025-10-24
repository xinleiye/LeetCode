# 执行操作后元素的最高频率 I

给你一个整数数组 `nums` 和两个整数 `k` 和 `numOperations` 。

你必须对 `nums` 执行 **操作** `numOperations` 次。每次操作中，你可以：

- 选择一个下标 `i` ，它在之前的操作中 **没有** 被选择过。
- 将 `nums[i]` 增加范围 `[-k, k]` 中的一个整数。

在执行完所有操作以后，请你返回 `nums` 中出现 **频率最高** 元素的出现次数。

一个元素 `x` 的 **频率** 指的是它在数组中出现的次数。

**示例 1：**

``` javascript
输入：nums = [1,4,5], k = 1, numOperations = 2

输出：2

解释：

通过以下操作得到最高频率 2 ：

将 nums[1] 增加 0 ，nums 变为 [1, 4, 5] 。
将 nums[2] 增加 -1 ，nums 变为 [1, 4, 4] 。
```

**示例 2：**

``` javascript
输入：nums = [5,11,20,20], k = 5, numOperations = 1

输出：2

解释：

通过以下操作得到最高频率 2 ：

将 nums[1] 增加 0 。
```

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `0 <= k <= 10^5`
- `0 <= numOperations <= nums.length`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
------|----------|-----------------|----------------|--------
1|javascript|657 / 21.53|100.94 / 5.26|[差分](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/maximum-frequency-of-an-element-after-performing-operations-i

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
