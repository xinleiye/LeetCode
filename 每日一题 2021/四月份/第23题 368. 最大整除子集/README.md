# 最大整除子集

给你一个由 **无重复** 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：

- answer[i] % answer[j] == 0 ，或
- answer[j] % answer[i] == 0

如果存在多个有效解子集，返回其中任何一个均可。

**示例 1：**

``` javascript
输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。
```

**示例 2：**

``` javascript
输入：nums = [1,2,4,8]
输出：[1,2,4,8]
```

**提示：**

- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 2 * 1e9
- nums 中的所有整数 **互不相同**

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[动态规划](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/largest-divisible-subset

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
