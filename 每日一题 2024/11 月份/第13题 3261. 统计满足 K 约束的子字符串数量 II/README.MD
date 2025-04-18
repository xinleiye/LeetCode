# 统计满足 K 约束的子字符串数量 II

给你一个 **二进制** 字符串 `s` 和一个整数 `k`。

另给你一个二维整数数组 `queries` ，其中 `queries[i] = [li, ri]` 。

如果一个 **二进制字符串** 满足以下任一条件，则认为该字符串满足 **k 约束**：

- 字符串中 `0` 的数量最多为 `k`。
- 字符串中 `1` 的数量最多为 `k`。

返回一个整数数组 `answer` ，其中 `answer[i]` 表示 `s[li..ri]` 中满足 **k 约束** 的 **子字符串** 的数量。

**示例 1：**

``` javascript
输入：s = "0001111", k = 2, queries = [[0,6]]

输出：[26]

解释：

对于查询 [0, 6]， s[0..6] = "0001111" 的所有子字符串中，除 s[0..5] = "000111" 和 s[0..6] = "0001111" 外，其余子字符串都满足 k 约束。
```

**示例 2：**

``` javascript
输入：s = "010101", k = 1, queries = [[0,5],[1,4],[2,3]]

输出：[15,9,3]

解释：

s 的所有子字符串中，长度大于 3 的子字符串都不满足 k 约束。
```

**提示：**

- `1 <= s.length <= 10^5`
- `s[i]` 是 `'0'` 或 `'1'`
- `1 <= k <= s.length`
- `1 <= queries.length <= 10^5`
- `queries[i] == [li, ri]`
- `0 <= li <= ri < s.length`
- 所有查询互不相同

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 37.06|87.16 / 92.34|[计数&前缀和](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/count-substrings-that-satisfy-k-constraint-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
