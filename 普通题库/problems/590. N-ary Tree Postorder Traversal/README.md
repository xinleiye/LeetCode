# N-ary Tree Postorder Traversal

Given an n-ary tree, return the postorder traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 
Follow up:
Recursive solution is trivial, could you do it iteratively?
 
Example 1:

![示例1](./eg1.png)

``` javascript
Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
```

Example 2:

![示例2](./eg2.png)

``` javascript
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
```

Constraints:
- The height of the n-ary tree is less than or equal to 1000
- The total number of nodes is between [0, 10^4]

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 87.77|37.7 / 100|[递归](./javascript/ac_v1.js)
2|javascript|96 / 43.35|37.5 / 100|[迭代](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
