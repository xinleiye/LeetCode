# 分割数组

给定一个数组 `nums` ，将其划分为两个连续子数组 `left` 和 `right`， 使得：

- `left` 中的每个元素都小于或等于 `right` 中的每个元素。
- `left` 和 `right` 都是非空的。
- `left` 的长度要尽可能小。

*在完成这样的分组后返回 `left` 的 **长度*** 。

用例可以保证存在这样的划分方法。

**示例 1：**

``` javascript
输入：nums = [5,0,3,8,6]
输出：3
解释：left = [5,0,3]，right = [8,6]
```

**示例 2：**

``` javascript
输入：nums = [1,1,1,0,6,12]
输出：4
解释：left = [1,1,1,0]，right = [6,12]
```

**提示：**

- `2 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^6`
- 可以保证至少有一种方法能够按题目所描述的那样对 `nums` 进行划分。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|96 / 53.33|52.1 / 53.33|[双指针](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/partition-array-into-disjoint-intervals

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
