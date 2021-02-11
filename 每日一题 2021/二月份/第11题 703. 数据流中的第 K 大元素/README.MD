# 数据流中的第 K 大元素

设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。

请实现 KthLargest 类：

KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。

**示例：**

``` javascript
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
输出：
[null, 4, 5, 5, 8, 8]

解释：
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

**提示：**

- 1 <= k <= 1e4
- 0 <= nums.length <= 1e4
- -1e4 <= nums[i] <= 1e4
- -1e4 <= val <= 1e4
- 最多调用 add 方法 1e4 次
- 题目数据保证，在查找第 k 大元素时，数组中至少有 k 个元素

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|224 / 56.68|45.7 / 83.53|[插入排序](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/kth-largest-element-in-a-stream

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
