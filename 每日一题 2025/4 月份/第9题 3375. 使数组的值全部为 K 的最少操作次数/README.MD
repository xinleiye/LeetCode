# 使数组的值全部为 K 的最少操作次数

给你一个整数数组 `nums` 和一个整数 `k` 。

如果一个数组中所有 **严格大于** `h` 的整数值都 **相等** ，那么我们称整数 `h` 是 **合法的** 。

比方说，如果 `nums = [10, 8, 10, 8]` ，那么 `h = 9` 是一个 **合法** 整数，因为所有满足 `nums[i] > 9` 的数都等于 10 ，但是 5 不是 **合法** 整数。

你可以对 `nums` 执行以下操作：

- 选择一个整数 `h` ，它对于 **当前** `nums` 中的值是合法的。
- 对于每个下标 `i` ，如果它满足 `nums[i] > h` ，那么将 `nums[i]` 变为 `h` 。

你的目标是将 `nums` 中的所有元素都变为 `k` ，请你返回 **最少** 操作次数。如果无法将所有元素都变 `k` ，那么返回 -1 。

**示例 1：**

```
输入：nums = [5,2,5,4,5], k = 2

输出：2

解释：

依次选择合法整数 4 和 2 ，将数组全部变为 2 。
```

**示例 2：**

```
输入：nums = [2,1,2], k = 2

输出：-1

解释：

没法将所有值变为 2 。
```

**示例 3：**

```
输入：nums = [9,7,5,3], k = 1

输出：4

解释：

依次选择合法整数 7 ，5 ，3 和 1 ，将数组全部变为 1 。
```

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 100`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|70 / 76.19|56.31 / 9.52|[贪心](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-operations-to-make-array-values-equal-to-k

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
