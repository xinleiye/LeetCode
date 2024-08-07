# 另一棵树的子树

给你两棵二叉树 `root` 和 `subRoot` 。检验 `root` 中是否包含和 `subRoot` 具有相同结构和节点值的子树。如果存在，返回 `true` ；否则，返回 `false` 。

二叉树 `tree` 的一棵子树包括 `tree` 的某个节点和这个节点的所有后代节点。`tree` 也可以看做它自身的一棵子树。

**示例 1：**

![示例1](./eg1.jpeg)

``` javascript
输入：root = [3,4,5,1,2], subRoot = [4,1,2]
输出：true
```

**示例 2：**

![示例2](./eg2.jpeg)

``` javascript
输入：root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
输出：false
```

**提示：**

- `root` 树上的节点数量范围是 `[1, 2000]`
- `subRoot` 树上的节点数量范围是 `[1, 1000]`
- `-10^4 <= root.val <= 10^4`
- `-10^4 <= subRoot.val <= 10^4`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 98.92|56.24 / 58.49|[深度优先](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/subtree-of-another-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
