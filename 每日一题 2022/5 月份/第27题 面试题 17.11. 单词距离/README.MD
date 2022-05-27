# 单词距离

有个内含单词的超大文本文件，给定任意两个 `不同的` 单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

**示例：**

``` javascript
输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
输出：1
```

**提示：**

- `words.length <= 100000`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|152 / 9.30|58.3 / 15.12|[哈希&双指针](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-closest-lcci

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
