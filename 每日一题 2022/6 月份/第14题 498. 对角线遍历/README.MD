# 对角线遍历

给你一个大小为 `m x n` 的矩阵 `mat` ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

**示例 1：**

![示例1](./eg1.jpg)

``` javascript
输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
```

**示例 2：**

``` javascript
输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
```

**提示：**

- `m == mat.lengthz`
- `n == mat[i].length`
- `1 <= m, n <= 10^4`
- `1 <= m * n <= 10^4`
- `-10^5 <= mat[i][j] <= 10^5`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 82.76|47.5 / 41.38|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/diagonal-traverse

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
