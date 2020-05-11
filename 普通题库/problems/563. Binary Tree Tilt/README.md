# Binary Tree Tilt

Given a binary tree, return the tilt of the **whole tree**.
The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.
The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:

``` javascript
Input: 
         1
       /   \
      2     3

Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
```

Note: 
- The sum of node values in any subtree won't exceed the range of 32-bit integer. 
- All the tilt values won't exceed the range of 32-bit integer.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 58.27|37 / 100|[后序遍历](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/binary-tree-tilt

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
