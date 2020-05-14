# Longest Univalue Path

Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.

**Example 1:**

``` javascript
Input:

              5
             / \
            4   5
           / \   \
          1   1   5

Output: 2
```

**Example 2:**

``` javascript
Input:

              1
             / \
            4   5
           / \   \
          4   4   5

Output: 2
```

**Note:** The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|352 / 5.44|62.2 / 100|[广度深度&暴力](./javascript/ac_v1.js)
2|javascript|192 / 92.52|52.2 / 100|[深度](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/longest-univalue-path

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
