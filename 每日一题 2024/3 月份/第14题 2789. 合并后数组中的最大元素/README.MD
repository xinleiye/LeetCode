# 合并后数组中的最大元素

给你一个下标从 **0** 开始、由正整数组成的数组 `nums` 。

你可以在数组上执行下述操作 **任意** 次：

- 选中一个同时满足 `0 <= i < nums.length - 1` 和 `nums[i] <= nums[i + 1]` 的整数 `i` 。将元素 `nums[i + 1]` 替换为 `nums[i] + nums[i + 1]` ，并从数组中删除元素 `nums[i]` 。

返回你可以从最终数组中获得的 **最大** 元素的值。

**示例 1：**

``` javascript
输入：nums = [2,3,7,9,3]
输出：21
解释：我们可以在数组上执行下述操作：
- 选中 i = 0 ，得到数组 nums = [5,7,9,3] 。
- 选中 i = 1 ，得到数组 nums = [5,16,3] 。
- 选中 i = 0 ，得到数组 nums = [21,3] 。
最终数组中的最大元素是 21 。可以证明我们无法获得更大的元素。
```

**示例 2：**

``` javascript
输入：nums = [5,3,3]
输出：11
解释：我们可以在数组上执行下述操作：
- 选中 i = 1 ，得到数组 nums = [5,6] 。
- 选中 i = 0 ，得到数组 nums = [11] 。
最终数组中只有一个元素，即 11 。
```

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|110 / 22.73|62.66 / 45.45|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
