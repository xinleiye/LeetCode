# 构成特定和需要添加的最少元素

给你一个整数数组 `nums` ，和两个整数 `limit` 与 `goal` 。数组 `nums` 有一条重要属性：`abs(nums[i]) <= limit` 。

返回使数组元素总和等于 `goal` 所需要向数组中添加的 **最少元素数量** ，添加元素 **不应改变** 数组中 `abs(nums[i]) <= limit` 这一属性。

注意，如果 `x >= 0` ，那么 `abs(x)` 等于 `x` ；否则，等于 `-x` 。

**示例 1：**

``` javascript
输入：nums = [1,-1,1], limit = 3, goal = -4
输出：2
解释：可以将 -2 和 -3 添加到数组中，数组的元素总和变为 1 - 1 + 1 - 2 - 3 = -4 。
```

**示例 2：**

``` javascript
输入：nums = [1,-10,9,1], limit = 100, goal = 0
输出：1
```

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= limit <= 10^6`
- `-limit <= nums[i] <= limit`
- `-10^9 <= goal <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 40.00|51.8 / 60.00|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
