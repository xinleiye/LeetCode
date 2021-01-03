# 最长定差子序列

给你一个整数数组 arr 和一个整数 difference，请你找出 arr 中所有相邻元素之间的差等于给定 difference 的等差子序列，并返回其中最长的等差子序列的长度。

示例 1：

```javascript
输入：arr = [1,2,3,4], difference = 1
输出：4
解释：最长的等差子序列是 [1,2,3,4]。
```

示例 2：

```javascript
输入：arr = [1,3,5,7], difference = 1
输出：1
解释：最长的等差子序列是任意单个元素。
```

示例 3：

``` javascript
输入：arr = [1,5,7,8,5,3,4,2,1], difference = -2
输出：4
解释：最长的等差子序列是 [7,5,3,1]。
```

提示：

- 1 <= arr.length <= 10^5
- -10^4 <= arr[i], difference <= 10^4

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|120 / 100|47.7 / 100|[正常解法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-arithmetic-subsequence-of-given-difference

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
