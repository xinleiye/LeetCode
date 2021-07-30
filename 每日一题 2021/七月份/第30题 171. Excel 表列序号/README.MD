# 二叉树寻路

给你一个字符串 columnTitle ，表示 Excel 表格中的列名称。返回该列名称对应的列序号。

例如，

``` javascript
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
```

**示例 1:**

``` javascript
输入: columnTitle = "A"
输出: 1
```

**示例 2:**

``` javascript
输入: columnTitle = "AB"
输出: 28
```

**示例 3:**

``` javascript
输入: columnTitle = "ZY"
输出: 701
```

**示例 4:**

``` javascript
输入: columnTitle = "FXSHRXW"
输出: 2147483647
```

**提示：**

- 1 <= columnTitle.length <= 7
- columnTitle 仅由大写英文组成
- columnTitle 在范围 ["A", "FXSHRXW"] 内

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|92 / 77.84|39.3 / 32.94|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/excel-sheet-column-number

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
