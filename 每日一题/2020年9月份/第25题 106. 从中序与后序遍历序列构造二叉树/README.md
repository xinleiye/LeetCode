# 从中序与后序遍历序列构造二叉树

根据一棵树的中序遍历与后序遍历构造二叉树。

**注意:**

你可以假设树中没有重复的元素。

例如，给出

``` javascript
中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
```

返回如下的二叉树：

``` javascript
    3
   / \
  9  20
    /  \
   15   7
```

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|124 / 66.83|40.5 / 83.70|[先序&哈希](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
