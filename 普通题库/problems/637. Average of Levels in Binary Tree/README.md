# Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

**Example 1:**

``` javascript
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
```

**Note:**
- The range of node's value is in the range of 32-bit signed integer.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|88 / 52.94|38.6 / 50|[广度优先](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
