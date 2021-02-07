# 任意子数组和的绝对值的最大值

给你一个整数数组 nums 。一个子数组 [nums[l], nums[l+1], ..., nums[r-1], nums[r]] 的 **和的绝对值** 为 abs(nums[l] + nums[l+1] + ... + nums[r-1] + nums[r]) 。

请你找出 nums 中 **和的绝对值** 最大的任意子数组（**可能为空**），并返回该 **最大值**。

abs(x) 定义如下：

- 如果 x 是负整数，那么 abs(x) = -x 。
- 如果 x 是非负整数，那么 abs(x) = x 。

**示例 1：**

``` javascript
输入：nums = [1,-3,2,3,-4]
输出：5
解释：子数组 [2,3] 和的绝对值最大，为 abs(2+3) = abs(5) = 5 。
```

**示例 2：**

``` javascript
输入：nums = [2,-5,1,-4,3,-2]
输出：8
解释：子数组 [-5,1,-4] 和的绝对值最大，为 abs(-5+1-4) = abs(-8) = 8 。
```

**提示：**

- 1 <= nums.length <= 1e5
- -1e4 <= nums[i] <= 1e4

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|100 / 100|44.7 / 100|[动态规划](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximum-absolute-sum-of-any-subarray

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
