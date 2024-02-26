# 二叉搜索树的范围和

给定二叉搜索树的根结点 `root`，返回值位于范围 *`[low, high]`* 之间的所有结点的值的和。

**示例 1：**

![示例1](./eg1.jpeg)

``` javascript
输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
```

**示例 2：**

![示例2](./eg2.jpeg)

``` javascript
输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
```

**提示：**

- 树中节点数目在范围 `[1, 2 * 10^4]` 内
- `1 <= Node.val <= 10^5`
- `1 <= low <= high <= 10^5`
- 所有 `Node.val` ：**互不相同：**

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|196 / 27.55|76.55 / 42.86|[中序](./javascript/ac_v1.js)
1|javascript|166 / 90.82|80.29 / 15.31|[深度优先](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/range-sum-of-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
