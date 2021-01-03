# 找到所有好字符串

给你两个长度为 n 的字符串 s1 和 s2 ，以及一个字符串 evil 。请你返回 好字符串 的数目。

好字符串 的定义为：它的长度为 n ，字典序大于等于 s1 ，字典序小于等于 s2 ，且不包含 evil 为子字符串。

由于答案可能很大，请你返回答案对 10^9 + 7 取余的结果。

示例 1：

``` javascript
输入：n = 2, s1 = "aa", s2 = "da", evil = "b"
输出：51
解释：总共有 25 个以 'a' 开头的好字符串："aa"，"ac"，"ad"，...，"az"。还有 25 个以 'c' 开头的好字符串："ca"，"cc"，"cd"，...，"cz"。最后，还有一个以 'd' 开头的好字符串："da"。
```

示例 2：

``` javascript
输入：n = 8, s1 = "leetcode", s2 = "leetgoes", evil = "leet"
输出：0
解释：所有字典序大于等于 s1 且小于等于 s2 的字符串都以 evil 字符串 "leet" 开头。所以没有好字符串。
```

示例 3：

``` javascript
输入：n = 2, s1 = "gx", s2 = "gz", evil = "x"
输出：2
```

提示：

- s1.length == n
- s2.length == n
- 1 <= n <= 500
- 1 <= evil.length <= 50
- 所有字符串都只包含小写英文字母。

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / 100|?? / 100|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-all-good-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
