# 序列化二叉树

请实现两个函数，分别用来序列化和反序列化二叉树。

你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

**提示**：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 [LeetCode 序列化二叉树的格式](https://support.leetcode-cn.com/hc/kb/category/1018267/)。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

**示例：**

![示例](./eg1.jpg)

``` javascript
输入：root = [1,2,3,null,null,4,5]
输出：[1,2,3,null,null,4,5]
```

注意：本题与主站 297 题相同：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|220 / 21.01|57.5 / 5.26|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
