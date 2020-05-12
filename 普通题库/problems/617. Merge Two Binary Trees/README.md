# Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:

``` javascript
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```

**Note:** The merging process must start from the root nodes of both trees.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|108 / 70.37|41.9 / 33.33|[深度优先](./javascript/ac_v1.js)
2|javascript|116 / 37.72|40.8 / 33.33|[深度优先](./javascript/ac_v2.js)
3|javascript|112 / 51.99|41 / 33.33|[广度优先](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/merge-two-binary-trees

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
