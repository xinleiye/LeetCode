# 二叉树展开为链表

给定一个二叉树，[原地](https://baike.baidu.com/item/%E5%8E%9F%E5%9C%B0%E7%AE%97%E6%B3%95/8010757) 将它展开为一个单链表。

例如，给定二叉树

``` javascript
    1
   / \
  2   5
 / \   \
3   4   6
```

将其展开为：

``` javascript
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 40.89|40.1 / 46.15|[深度优先](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
