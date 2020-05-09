# Maximum Depth of N-ary Tree

Given a n-ary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 
Example 1:

![示例1](./eg1.png)

``` javascript
Input: root = [1,null,3,2,4,null,5,6]
Output: 3
```

Example 2:

![示例2](./eg2.png)

``` javascript
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
```

Constraints:
- The depth of the n-ary tree is less than or equal to 1000.
- The total number of nodes is between [0, 10^4].

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 41.54|42.3 / 100|[广度优先](./javascript/ac_v1.js)
2|javascript|76 / 84.56|37.2 / 100|[深度优先](./javascript/ac_v2.js)
3|javascript|76 / 84.56|37.3 / 100|[深度优先](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/diameter-of-binary-tree

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
