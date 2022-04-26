# 随机数索引

给你一个可能含有 **重复元素** 的整数数组 `nums` ，请你随机输出给定的目标数字 `target` 的索引。你可以假设给定的数字一定存在于数组中。

实现 `Solution` 类：

- `Solution(int[] nums)` 用数组 `nums` 初始化对象。
- `int pick(int target)` 从 `nums` 中选出一个满足 `nums[i] == target` 的随机索引 `i` 。如果存在多个有效的索引，则每个索引的返回概率应当相等。

**示例：**

``` javascript
输入
["Solution", "pick", "pick", "pick"]
[[[1, 2, 3, 3, 3]], [3], [1], [3]]
输出
[null, 4, 0, 2]

解释
Solution solution = new Solution([1, 2, 3, 3, 3]);
solution.pick(3); // 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。
solution.pick(1); // 返回 0 。因为只有 nums[0] 等于 1 。
solution.pick(3); // 随机返回索引 2, 3 或者 4 之一。每个索引的返回概率应该相等。
```

**提示：**

- `1 <= nums.length <= 2 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `target` 是 `nums` 中的一个整数
- 最多调用 `pick` 函数 `10^4` 次

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|116 / 31.75|64.7 / 6.35|[哈希](./javascript/ac_v1.js)
2|javascript|112 / 36.51|50.1 / 82.54|[水塘抽样](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/random-pick-index

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
