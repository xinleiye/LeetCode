# 求出数组中最大序列值

给你一个整数数组 `nums` 和一个 **正** 整数 `k` 。

定义长度为 `2 * x` 的序列 `seq` 的 **值** 为：

- `(seq[0] OR seq[1] OR ... OR seq[x - 1]) XOR (seq[x] OR seq[x + 1] OR ... OR seq[2 * x - 1])`.

请你求出 `nums` 中所有长度为 `2 * k` 的 **子序列** 的 **最大值** 。

**示例 1：**

``` javascript
输入：nums = [2,6,7], k = 1

输出：5

解释：

子序列 [2, 7] 的值最大，为 2 XOR 7 = 5 。
```

**示例 2：**

``` javascript
输入：nums = [4,2,5,6,7], k = 2

输出：2

解释：

子序列 [4, 5, 6, 7] 的值最大，为 (4 OR 5) XOR (6 OR 7) = 2 。
```

**提示：**

- `2 <= nums.length <= 400`
- `1 <= nums[i] < 2^7`
- `1 <= k <= nums.length / 2`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-the-maximum-sequence-value-of-array

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
