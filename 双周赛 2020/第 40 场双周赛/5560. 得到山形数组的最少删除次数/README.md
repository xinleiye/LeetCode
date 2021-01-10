# 得到山形数组的最少删除次数

我们定义 arr 是 **山形数组** 当且仅当它满足：

- arr.length >= 3
- 存在某个下标 i **（从 0 开始）** 满足 0 < i < arr.length - 1 且：
  - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
  - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

给你整数数组 nums​ ，请你返回将 nums 变成 **山形状数组** 的​ **最少** 删除次数。

**示例 1：**

``` javascript
输入：nums = [1,3,1]
输出：0
解释：数组本身就是山形数组，所以我们不需要删除任何元素。
```

**示例 2：**

``` javascript
输入：nums = [2,1,1,5,6,2,3,1]
输出：3
解释：一种方法是将下标为 0，1 和 5 的元素删除，剩余元素为 [1,5,6,3,1] ，是山形数组。
```

**示例 3：**

``` javascript
输入：nums = [4,3,2,1,1,2,3,1]
输出：4
```

**示例4：**

``` javascript
输入：nums = [1,2,3,4,4,3,2,1]
输出：1
```

**提示：**

- 3 <= nums.length <= 1000
- 1 <= nums[i] <= 1e9
- 题目保证 nums 删除一些元素后一定能得到山形数组。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / 100|?? / 100|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-number-of-removals-to-make-mountain-array

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
