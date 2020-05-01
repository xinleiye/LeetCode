# Invert Binary Tree

Invert a binary tree.

Example:

``` javascript
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

Trivia:
This problem was inspired by [this original tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl):

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|48 / 93.90|33.8 / 73.61|[深度优先](./javascricpt/ac_v1.js)
2|javascript|52 / 82.07|33.8 / 39.78|[广度优先](./javascricpt/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/invert-binary-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
