# 宝石与石头

给你一个字符串 `jewels` 代表石头中宝石的类型，另有一个字符串 `stones` 代表你拥有的石头。 `stones` 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

字母区分大小写，因此 `"a"` 和 `"A"` 是不同类型的石头。

**示例 1：**

``` javascript
输入：jewels = "aA", stones = "aAAbbbb"
输出：3
```

**示例 2：**

``` javascript
输入：jewels = "z", stones = "ZZ"
输出：0
```

**提示：**

- `1 <= jewels.length, stones.length <= 50`
- `jewels` 和 `stones` 仅由英文字母组成
- `jewels` 中的所有字符都是 唯一的

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|64 / 62.10|42.6 / 9.59|[哈希](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/jewels-and-stones

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
