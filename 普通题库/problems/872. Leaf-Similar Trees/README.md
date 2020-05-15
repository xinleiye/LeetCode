# Leaf-Similar Trees

Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

![示例1](./eg1.png)

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

**Constraints:**
- Both of the given trees will have between 1 and 200 nodes.
- Both of the given trees will have values between 0 and 200

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 93.48|34.9 / 100|[先序](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/leaf-similar-trees

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
