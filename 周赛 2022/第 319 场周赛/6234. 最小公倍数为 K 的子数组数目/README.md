# 最小公倍数为 K 的子数组数目

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 `nums` 的 **子数组** 中满足 *元素最小公倍数为 `k`* 的子数组数目。

**子数组** 是数组中一个连续非空的元素序列。

**数组的最小公倍数** 是可被所有数组元素整除的最小正整数。

**示例 1 ：**

``` javascript
输入：nums = [3,6,2,7,1], k = 6
输出：4
解释：以 6 为最小公倍数的子数组是：
- [[3,6],2,7,1]
- [[3,6,2],7,1]
- [3,[6],2,7,1]
- [3,[6,2],7,1]
```

**示例 2 ：**

``` javascript
输入：nums = [3], k = 2
输出：0
解释：不存在以 2 为最小公倍数的子数组。
```

**提示：**

- `1 <= nums.length <= 1000`
- `1 <= nums[i], k <= 1000`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|72 / 88.03|41.2 / 54.70|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/number-of-subarrays-with-lcm-equal-to-k

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
