# Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.
 
**Example 1:**

``` javascript
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
```

**Example 2:**

``` javascript
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
```

**Note:**
- The number of nodes in the tree is at most 10000.
- The final answer is guaranteed to be less than 2^31.

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|172 / 97.34|67.5 / 100|[先序遍历](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/range-sum-of-bst

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
