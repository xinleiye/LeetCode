# 二进制数转字符串

二进制数转字符串。给定一个介于 `0` 和 `1` 之间的实数（如 `0.72` ），类型为 `double`，打印它的二进制表达式。如果该数字无法精确地用 `32` 位以内的二进制表示，则打印 `“ERROR”`。

**示例1:**

``` javascript
 输入：0.625
 输出："0.101"
```

**示例2:**

``` javascript
 输入：0.1
 输出："ERROR"
 提示：0.1无法被二进制准确表示
```

**提示：**

- `32` 位包括输出中的 `"0."` 这两位。
- 题目保证输入用例的小数位数最多只有 `6` 位

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 21.21|40.7 / 100.00|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/bianry-number-to-string-lcci

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
