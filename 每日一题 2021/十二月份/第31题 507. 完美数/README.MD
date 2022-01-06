# 完美数

对于一个 **正整数**，如果它和除了它自身以外的所有 **正因子** 之和相等，我们称它为 「完美数」。

给定一个 **整数** `n`， 如果是完美数，返回 `true`，否则返回 `false`

**示例 1：**

``` javascript
输入：num = 28
输出：true
解释：28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, 和 14 是 28 的所有正因子。
```

**示例 2：**

``` javascript
输入：num = 6
输出：true
```

**示例 3：**

``` javascript
输入：num = 496
输出：true
```

**示例 4：**

``` javascript
输入：num = 8128
输出：true
```

**示例 5：**

``` javascript
输入：num = 2
输出：false
```

**提示：**

- `1 <= num <= 1e8`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|104 / 57.47|38 / 31.67|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/perfect-number

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
