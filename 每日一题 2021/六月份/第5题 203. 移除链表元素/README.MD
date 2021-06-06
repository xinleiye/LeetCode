# 移除链表元素

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 **新的头节点**。

**示例 1：**

![示例1](./eg1.jpg)

``` javascript
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

**示例 2：**

``` javascript
输入：head = [], val = 1
输出：[]
```

**示例 3：**

``` javascript
输入：head = [7,7,7,7], val = 7
输出：[]
```

**提示：**

- 列表中的节点在范围 [0, 1e4] 内
- 1 <= Node.val <= 50
- 0 <= k <= 50

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|100 / 85.15|42.6 / 36.16|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/remove-linked-list-elements

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
