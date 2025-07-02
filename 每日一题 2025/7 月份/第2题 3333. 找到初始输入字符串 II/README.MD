# 找到初始输入字符串 II

Alice 正在她的电脑上输入一个字符串。但是她打字技术比较笨拙，她 **可能** 在一个按键上按太久，导致一个字符被输入 **多次** 。

给你一个字符串 `word` ，它表示 **最终** 显示在 Alice 显示屏上的结果。同时给你一个 **正** 整数 `k` ，表示一开始 Alice 输入字符串的长度 **至少** 为 `k` 。

请你返回 Alice 一开始可能想要输入字符串的总方案数。

由于答案可能很大，请你将它对 `10^9 + 7` **取余** 后返回。

**示例 1：**

``` javascript
输入：word = "aabbccdd", k = 7

输出：5

解释：

可能的字符串包括："aabbccdd" ，"aabbccd" ，"aabbcdd" ，"aabccdd" 和 "abbccdd" 。
```

**示例 2：**

``` javascript
输入：word = "aabbccdd", k = 8

输出：1

解释：

唯一可能的字符串是 "aabbccdd" 。
```

**示例 3：**

``` javascript
输入：word = "aaabbb", k = 3

输出：8
```

**提示：**

- `1 <= word.length <= 5 * 10^5`
- `word` 只包含小写英文字母。
- `1 <= k <= 2000`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
------|----------|-----------------|----------------|--------
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-the-original-typed-string-ii

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
