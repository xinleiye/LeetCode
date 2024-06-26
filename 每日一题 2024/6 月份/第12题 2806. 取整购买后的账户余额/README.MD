# 取整购买后的账户余额

一开始，你的银行账户里有 `100` 块钱。

给你一个整数 `purchaseAmount` ，它表示你在一次购买中愿意支出的金额。

在一个商店里，你进行一次购买，实际支出的金额会向 **最近** 的 `10` 的 **倍数** 取整。换句话说，你实际会支付一个 **非负** 金额 `roundedAmount` ，满足 `roundedAmount` 是 `10` 的倍数且 `abs(roundedAmount - purchaseAmount)` 的值 **最小** 。

如果存在多于一个最接近的 `10` 的倍数，**较大的倍数** 是你的实际支出金额。

请你返回一个整数，表示你在愿意支出金额为 `purchaseAmount` 块钱的前提下，购买之后剩下的余额。

**注意：** `0` 也是 `10` 的倍数。

**示例 1：**

``` javascript
输入：purchaseAmount = 9
输出：90
解释：这个例子中，最接近 9 的 10 的倍数是 10 。所以你的账户余额为 100 - 10 = 90 。
```

**示例 2：**

``` javascript
输入：purchaseAmount = 15
输出：80
解释：这个例子中，有 2 个最接近 15 的 10 的倍数：10 和 20，较大的数 20 是你的实际开销。
所以你的账户余额为 100 - 20 = 80 。
```

**提示：**

- `0 <= purchaseAmount <= 100`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|54 / 70.37|48.98 / 55.56|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/account-balance-after-rounded-purchase

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
