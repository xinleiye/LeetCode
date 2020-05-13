# Trim a Binary Search Tree

Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

**Example 1:**

``` javascript
Input:
    1
   / \
  0   2

  L = 1
  R = 2

Output:
    1
      \
       2
```

**Example 2:**

``` javascript
Input:
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

Output:
      3
     / 
   2   
  /
 1
```

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|80 / 77.78|39.2 / 100|[中序过滤&建树](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/trim-a-binary-search-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
