# Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:

``` javascript
Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
```

Note: The length of path between two nodes is represented by the number of edges between them.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|140 / 6.09|37.5 / 31.52|[广度加深度](./javascript/ac_v1.js)
2|javascript|72 / 87.54|37.9 / 14.13|[深度优先](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/diameter-of-binary-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
