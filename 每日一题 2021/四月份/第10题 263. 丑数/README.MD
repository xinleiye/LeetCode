# 丑数

给你一个整数 n ，请你判断 n 是否为 **丑数**。如果是，返回 true ；否则，返回 false 。

**丑数** 就是只包含质因数 2、3 和/或 5 的正整数。

**示例 1：**

``` javascript
输入：n = 6
输出：true
解释：6 = 2 × 3
```

**示例 2：**

``` javascript
输入：n = 8
输出：true
解释：8 = 2 × 2 × 2
```

**示例 3：**

``` javascript
输入：n = 14
输出：false
解释：14 不是丑数，因为它包含了另外一个质因数 7 。
```

**示例 4：**

``` javascript
输入：n = 1
输出：true
解释：1 通常被视为丑数。
```

**提示：**

- -2^31 <= n <= 2^31 - 1

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|116 / 17.32|39.4 / 12.20|[递归](./javascript/ac_v1.js)
2|javascript|96 / 73.90|39.1 / 77.07|[递归](./javascript/ac_v2.js)
3|javascript|96 / 73.90|39.2 / 34.63|[迭代](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/ugly-number

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
