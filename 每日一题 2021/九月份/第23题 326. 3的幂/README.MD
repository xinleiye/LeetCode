# 3的幂

给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3^x

**示例 1：**

``` javascript
输入：n = 27
输出：true
```

**示例 2：**

``` javascript
输入：n = 0
输出：false
```

**示例 3：**

``` javascript
输入：n = 9
输出：true
```

**示例 4：**

``` javascript
输入：n = 45
输出：false
```

**提示：**

-2^31 <= n <= 2^31 - 1

**进阶：**

- 你能不使用循环或者递归来完成本题吗？

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|236 / 37.51|47.5 / 57.14|[约数](./javascript/ac_v1.js)
2|javascript|244 / 32.06|47.8 / 19.86|[除法](./javascript/ac_v2.js)
3|javascript|172 / 99.07|37.7 / 32.52|[乘法](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/power-of-three

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
