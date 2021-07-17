# 连续子数组的最大和

输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。

**示例1:**

``` javascript
输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```

**提示：**

- 1 <= arr.length <= 10^5
- -100 <= arr[i] <= 100

注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 90.32|41 / 98.24|[动态规划](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
