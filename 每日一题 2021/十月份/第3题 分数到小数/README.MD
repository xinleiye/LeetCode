# 分数到小数

给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 **字符串形式返回小数**。

如果小数部分为循环小数，则将循环的部分括在括号内。

如果存在多个答案，只需返回 **任意一个**。

对于所有给定的输入，**保证** 答案字符串的长度小于 1e4 。

**示例 1：**

``` javascript
输入：numerator = 1, denominator = 2
输出："0.5"
```

**示例 2：**

``` javascript
输入：numerator = 2, denominator = 1
输出："2"
```

**示例 3：**

``` javascript
输入：numerator = 2, denominator = 3
输出："0.(6)"
```

**示例 4：**

``` javascript
输入：numerator = 4, denominator = 333
输出："0.(012)"
```

**示例 5：**

``` javascript
输入：numerator = 1, denominator = 5
输出："0.2"
```

**提示：**

- -2^31 <= numerator, denominator <= 2^31 - 1
- denominator != 0

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 21.74|38 / 51.30|[模拟除法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/fraction-to-recurring-decimal

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
