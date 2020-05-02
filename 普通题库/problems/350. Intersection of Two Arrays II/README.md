# Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example 1:

``` javascript
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

Example 2:

``` javascript
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

Note:

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

Follow up:

- What if the given array is already sorted? How would you optimize your algorithm?
- What if nums1's size is small compared to nums2's size? Which algorithm is better?
- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|72 / 70.53|34 / 100|[暴力查找](./javascript/ac_v1.js)
2|javascript|60 / 97.27|33.9 / 100|[暴力查找](./javascript/ac_v2.js)
3|javascript|76 / 55.83|36.3 / 25.00|[map查找](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/intersection-of-two-arrays-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
