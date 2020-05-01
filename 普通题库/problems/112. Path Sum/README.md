# Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
Note: A leaf is a node with no children.

Example:

``` javascript
Given the below binary tree and sum = 22,
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
```

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 91.77|37.1 / 82.07|[深度优先](./javascricpt/ac_v1.js)
2|javascript|64 / 80.56|37.3 / 52.95|[深度优先](./javascricpt/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/path-sum

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
