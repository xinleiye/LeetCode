# 判断能否形成等差数列

给你一个数字数组 arr 。

如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。

如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。

**示例 1：**

``` javascript
输入：arr = [3,5,1]
输出：true
解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。
```

**示例 2：**

``` javascript
输入：arr = [1,2,4]
输出：false
解释：无法通过重新排序得到等差数列。
```

**提示：**

- 2 <= arr.length <= 1000
- -10^6 <= arr[i] <= 10^6

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 100|35 / 100|[求和](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
