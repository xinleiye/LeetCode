# 或值至少为 K 的最短子数组 II

给你一个 **非负** 整数数组 `nums` 和一个整数 `k` 。

如果一个数组中所有元素的按位或运算 `OR` 的值 **至少** 为 `k` ，那么我们称这个数组是 **特别的** 。

请你返回 `nums` 中 **最短特别非空** **子数组** 的长度，如果特别子数组不存在，那么返回 `-1` 。

**示例 1：**

``` javascript
输入：nums = [1,2,3], k = 2

输出：1

解释：

子数组 [3] 的按位 OR 值为 3 ，所以我们返回 1 。
```

**示例 2：**

``` javascript
输入：nums = [2,1,8], k = 10

输出：3

解释：

子数组 [2,1,8] 的按位 OR 值为 11 ，所以我们返回 3 。
```

**示例 3：**

``` javascript
输入：nums = [1,2], k = 0

输出：1

解释：

子数组 [1] 的按位 OR 值为 1 ，所以我们返回 1 。
```

**提示：**

- `1 <= nums.length <= 2 * 10^5`
- `0 <= nums[i] <= 10^9`
- `0 <= k <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|9 / 81.82|60.24 / 94.44|[LogTrick](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/shortest-subarray-with-or-at-least-k-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
