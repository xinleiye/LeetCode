# 分割两个字符串得到回文串

给你两个字符串 a 和 b ，它们长度相同。请你选择一个下标，将两个字符串都在 **相同的下标** 分割开。由 a 可以得到两个字符串： a[prefix] 和 a[suffix] ，满足 a = a[prefix] + a[suffix] ，同理，由 b 可以得到两个字符串 b[prefix] 和 b[suffix] ，满足 b = b[prefix] + b[suffix] 。请你判断 a[prefix] + b[suffix] 或者 b[prefix] + a[suffix] 能否构成回文串。

当你将一个字符串 s 分割成 s[prefix] 和 s[suffix] 时， s[suffix] 或者 s[prefix] 可以为空。比方说， s = "abc" 那么 "" + "abc" ， "a" + "bc" ， "ab" + "c" 和 "abc" + "" 都是合法分割。

如果 **能构成回文字符串**，那么请返回 true，否则返回 false 。

**请注意**， x + y 表示连接字符串 x 和 y 。

**示例 1：**

``` javascript
输入：a = "x", b = "y"
输出：true
解释：如果 a 或者 b 是回文串，那么答案一定为 true ，因为你可以如下分割：
a[prefix] = "", a[suffix] = "x"
b[prefix] = "", b[suffix] = "y"
那么 a[prefix] + b[suffix] = "" + "y" = "y" 是回文串。
```

**示例 2：**

``` javascript
输入：a = "ulacfd", b = "jizalu"
输出：true
解释：在下标为 3 处分割：
a[prefix] = "ula", a[suffix] = "cfd"
b[prefix] = "jiz", b[suffix] = "alu"
那么 a[prefix] + b[suffix] = "ula" + "alu" = "ulaalu" 是回文串。
```

**提示：**

- 1 <= a.length, b.length <= 1e5
- a.length == b.length
- a 和 b 都只包含小写英文字母

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|164 / 100|46.9 / 100|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/split-two-strings-to-make-palindrome

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
