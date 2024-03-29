# 序列化和反序列化二叉搜索树

序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化 **二叉搜索树** 。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

**编码的字符串应尽可能紧凑。**

**示例 1：**

``` javascript
输入：root = [2,1,3]
输出：[2,1,3]
```

**示例 2：**

``` javascript
输入：root = []
输出：[]
```

**提示：**

- 树中节点数范围是 `[0, 10^4]`
- `0 <= Node.val <= 10^4`
- 题目数据 **保证** 输入的树是一棵二叉搜索树。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 66.67|48.5 / 65.91|[后序](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/serialize-and-deserialize-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
