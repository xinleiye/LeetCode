# Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

![问题说明](./question.png)

Example 1:

``` javascript
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

Example 2:

``` javascript
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

Note:

- All of the nodes' values will be unique.
- p and q are different and both values will exist in the BST.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 81.92|43.8 / 20.44|[递归](./javascricpt/ac_v1.js)
2|javascript|72 / 92.15|43.7 / 43.80|[循环](./javascricpt/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
