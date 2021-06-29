# Excel表列名称

给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

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

**示例 1：**

``` javascript
输入：columnNumber = 1
输出："A"
```

**示例 2：**

``` javascript
输入：columnNumber = 28
输出："AB"
```

**示例 3：**

``` javascript
输入：columnNumber = 701
输出："ZY"
```

**示例 4：**

``` javascript
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

**提示：**

- 1 <= columnNumber <= 2^31 - 1

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 98.68|37.8 / 23.50|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/excel-sheet-column-title

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
