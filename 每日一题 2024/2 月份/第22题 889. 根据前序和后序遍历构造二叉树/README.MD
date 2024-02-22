# 从中序与后序遍历序列构造二叉树

给定两个整数数组，`preorder` 和 `postorder` ，其中 `preorder` 是一个具有 **无重复** 值的二叉树的前序遍历，`postorder` 是同一棵树的后序遍历，重构并返回二叉树。

如果存在多个答案，您可以返回其中 **任何** 一个。

**示例 1：**

![示例1](./eg1.jpeg)

``` javascript
输入：preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]
```

**示例 2：**

``` javascript
输入: preorder = [1], postorder = [1]
输出: [1]
```

**提示：**

- `1 <= preorder.length <= 30`
- `1 <= preorder[i] <= preorder.length`
- `preorder` 中所有值都 **不同**
- `postorder.length == preorder.length`
- `1 <= postorder[i] <= postorder.length`
- `postorder` 中所有值都 **不同**
- 保证 `preorder` 和 `postorder` 是同一棵二叉树的前序遍历和后序遍历

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|79 / 85.44|53.55 / 78.67|[递归](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
