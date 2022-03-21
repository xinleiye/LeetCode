# 两数之和 IV - 输入 BST

给定一个二叉搜索树 `root` 和一个目标结果 `k`，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 `true`。

**示例 1：**

![示例1](./eg1.jpg)

``` javascript
输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
```

**示例 2：**

![示例2](./eg2.jpg)

``` javascript
输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
```

**提示:**

- 二叉树的节点个数的范围是 `[1, 1e4]`.
- `-1e4 <= Node.val <= 1e4`
- `root` 为二叉搜索树
- `-1e5 <= k <= 1e5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 69.25|51 / 11.25|[中序&二分查找](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
