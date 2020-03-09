# Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

``` javascript
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following [1,2,2,null,3,null,3] is not:

``` javascript
    1
   / \
  2   2
   \   \
   3    3
```

Note:
- Bonus points if you could solve it both recursively and iteratively.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 45.06|36.1 / 13.57|[广度优先]](./javascript/ac_v1.js)
2|javascript|120 / 5.97|35.4 / 97.49|[递归，深度优先](./javascript/ac_v2.js)
2|javascript|68 / 83.21|35.5 / 70.15|[广度优先·优化](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/symmetric-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
