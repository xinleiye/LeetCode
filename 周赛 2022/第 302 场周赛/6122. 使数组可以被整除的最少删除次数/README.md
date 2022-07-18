# 使数组可以被整除的最少删除次数

给你两个正整数数组 `nums` 和 `numsDivide` 。你可以从 `nums` 中删除任意数目的元素。

请你返回使 `nums` 中 **最小** 元素可以整除 `numsDivide` 中所有元素的 **最少** 删除次数。如果无法得到这样的元素，返回 `-1` 。

如果 `y % x == 0` ，那么我们说整数 `x` 整除 `y` 。

**示例 1：**

``` javascript
输入：nums = [2,3,2,4,3], numsDivide = [9,6,9,3,15]
输出：2
解释：
[2,3,2,4,3] 中最小元素是 2 ，它无法整除 numsDivide 中所有元素。
我们从 nums 中删除 2 个大小为 2 的元素，得到 nums = [3,4,3] 。
[3,4,3] 中最小元素为 3 ，它可以整除 numsDivide 中所有元素。
可以证明 2 是最少删除次数。
```

**示例 2：**

``` javascript
输入：nums = [4,3,6], numsDivide = [8,2,6,10]
输出：-1
解释：
我们想 nums 中的最小元素可以整除 numsDivide 中的所有元素。
没有任何办法可以达到这一目的。
```

**提示：**

- `1 <= nums.length, numsDivide.length <= 10^5`
- `1 <= nums[i], numsDivide[i] <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / 100|?? / 100|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/minimum-deletions-to-make-array-divisible

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
