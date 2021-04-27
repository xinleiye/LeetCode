# 二叉搜索树的范围和

给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

**示例 1：**

![示例1](./eg1.jpg)

``` javascript
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
```

**示例 2：**

![示例2](./eg2.jpg)

``` javascript
输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
```

**提示：**

- 树中节点数目在范围 [1, 2 * 1e4] 内
- 1 <= Node.val <= 1e5
1 <= low <= high <= 1e5
所有 Node.val **互不相同**

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|268 / 37.27|64.5 / 41.36|[中序遍历](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/range-sum-of-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
