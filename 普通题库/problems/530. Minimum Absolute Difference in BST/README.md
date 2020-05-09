# Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

``` javascript
Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
```

Note:
- There are at least two nodes in this BST.
- This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 44.79|38.4 / 100|[中序遍历](./javascript/ac_v1.js)
2|javascript|80 / 84.90|37.8 / 100|[中序遍历](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
