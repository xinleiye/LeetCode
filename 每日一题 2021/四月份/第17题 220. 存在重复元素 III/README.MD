# 存在重复元素 III

给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 **两个不同下标** i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

**示例 1：**

``` javascript
输入：nums = [1,2,3,1], k = 3, t = 0
输出：true
```

**示例 2：**

``` javascript
输入：nums = [1,0,1,1], k = 1, t = 2
输出：true
```

**示例 3：**

``` javascript
输入：nums = [1,5,9,1,5,9], k = 2, t = 3
输出：false
```

**提示：**

- 0 <= nums.length <= 2 * 1e4
- -2^31 <= nums[i] <= 2^31 - 1
- 0 <= k <= 1e4
- 0 <= t <= 2^31 - 1

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 96.06|44.1 / 5.07|[桶](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/contains-duplicate-iii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
