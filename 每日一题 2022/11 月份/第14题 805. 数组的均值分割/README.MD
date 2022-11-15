# 数组的均值分割

给定你一个整数数组 `nums`

我们要将 `nums` 数组中的每个元素移动到 `A` 数组 或者 `B` 数组中，使得 `A` 数组和 `B` 数组不为空，并且 `average(A) == average(B)` 。

如果可以完成则返回 `true` ， 否则返回 `false` 。

**注意：**对于数组 `arr` , `average(arr)` 是 `arr` 的所有元素的和除以 `arr` 长度。

**示例 1:**

``` javascript
输入: nums = [1,2,3,4,5,6,7,8]
输出: true
解释: 我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。
```

**示例 2:**

``` javascript
输入: nums = [3,1]
输出: false
```

**提示:**

- `1 <= nums.length <= 30`
- `0 <= nums[i] <= 10^4`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/split-array-with-same-average

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
