# Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example:

``` javascript
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
```

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 85.41|37.3 / 50.26|[广度优先](./javascricpt/ac_v1.js)
2|javascript|56 / 90.03|37.5 / 21.99|[深度优先](./javascricpt/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
