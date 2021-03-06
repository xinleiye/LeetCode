# Sum of Root To Leaf Binary Numbers

Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.

For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.

Return the sum of these numbers.


**Example 1:**

![示例1](./eg1.png)

``` javascript
Input: [1,0,1,0,1,0,1]
Output: 22
Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
```

**Note:**

- The number of nodes in the tree is between 1 and 1000.
- node.val is 0 or 1.
- The answer will not exceed 2^31 - 1.

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|52 / 100|35.5 / 100|[深度优先](./javascript/ac_v1.js)
2|javascript|72 / 76.34|35.5 / 100|[深度优先](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
