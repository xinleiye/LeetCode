# Find Mode in Binary Search Tree

Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys **less than or equal to** the node's key.
The right subtree of a node contains only nodes with keys **greater than or equal to** the node's key.
Both the left and right subtrees must also be binary search trees.
 
For example:

```
Given BST [1,null,2,2],
   1
    \
     2
    /
   2
 
return [2].
```

**Note**: If a tree has more than one mode, you can return them in any order.
**Follow up**: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 50.65|42.6 / 100|[先序统计](./javascript/ac_v1.js)
2|javascript|108 / 19.48|40.6 / 100|[中序遍历](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
