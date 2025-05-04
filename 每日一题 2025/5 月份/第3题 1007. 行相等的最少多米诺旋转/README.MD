# 等价多米诺骨牌对的数量

给你一组多米诺骨牌 `dominoes` 。

形式上，`dominoes[i] = [a, b]` 与 `dominoes[j] = [c, d]` **等价** 当且仅当 (`a == c` 且 `b == d`) 或者 (`a == d` 且 `b == c`) 。即一张骨牌可以通过旋转 `0` 度或 `180` 度得到另一张多米诺骨牌。

在 `0 <= i < j < dominoes.length` 的前提下，找出满足 `dominoes[i]` 和 `dominoes[j]` 等价的骨牌对 `(i, j)` 的数量。

**示例 1：**

```
输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
输出：1
```

**示例 2：**

```
输入：dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
输出：3
```

**提示：**

- `1 <= dominoes.length <= 4 * 10^4`
- `dominoes[i].length == 2`
- `1 <= dominoes[i][j] <= 9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|12 / 71.43|66.34 / 54.29|[哈希](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/number-of-equivalent-domino-pairs

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
