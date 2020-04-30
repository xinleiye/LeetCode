# Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:

``` javascript
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
```

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 70.68|34.8 / 76.36|[广度优先](./javascript/ac_v1.js)
2|javascript|60 / 95.09|34.8 / 72.27|[深度优先](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
