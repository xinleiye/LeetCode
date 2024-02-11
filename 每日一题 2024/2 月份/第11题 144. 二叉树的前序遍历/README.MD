# 二叉树的前序遍历

给你二叉树的根节点 `root` ，返回它节点值的 **前序** 遍历。

**示例 1：**

![示例1](./eg1.jpeg)

``` javascript
输入：root = [1,null,2,3]
输出：[1,2,3]
```

**示例 2：**

``` javascript
输入：root = []
输出：[]
```

**示例 3：**

``` javascript
输入：root = [1]
输出：[1]
```

**示例 4：**

![示例4](./eg4.jpeg)

``` javascript
输入：root = [1,2]
输出：[1,2]
```

**示例 5：**

![示例5](./eg5.jpeg)

``` javascript
输入：root = [1,null,2]
输出：[1,2]
```

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`
 

**进阶：**递归算法很简单，你可以通过迭代算法完成吗？

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 19.03|49.25 / 10.57|[先序](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/binary-tree-preorder-traversal

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
