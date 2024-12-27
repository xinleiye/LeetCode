# 字符串及其反转中是否存在同一子字符串

给你一个整数数组 `nums` ，一个整数数组 `queries` 和一个整数 `x` 。

对于每个查询 `queries[i]` ，你需要找到 `nums` 中第 `queries[i]` 个 `x` 的位置，并返回它的下标。如果数组中 `x` 的出现次数少于 `queries[i]` ，该查询的答案为 -1 。

请你返回一个整数数组 `answer` ，包含所有查询的答案。

**示例 1：**

``` javascript
输入：nums = [1,3,1,7], queries = [1,3,2,4], x = 1

输出：[0,-1,2,-1]

解释：

第 1 个查询，第一个 1 出现在下标 0 处。
第 2 个查询，nums 中只有两个 1 ，所以答案为 -1 。
第 3 个查询，第二个 1 出现在下标 2 处。
第 4 个查询，nums 中只有两个 1 ，所以答案为 -1 。
```

**示例 2：**

``` javascript
输入：nums = [1,2,3], queries = [10], x = 5

输出：[-1]

解释：

第 1 个查询，nums 中没有 5 ，所以答案为 -1 。
```

**提示：**

- `1 <= nums.length, queries.length <= 10^5`
- `1 <= queries[i] <= 10^5`
- `1 <= nums[i], x <= 10^4`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|17 / 100.00|84.20 / 75.00|[位置记录](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-occurrences-of-an-element-in-an-array

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
