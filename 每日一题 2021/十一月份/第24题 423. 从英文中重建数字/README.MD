# 从英文中重建数字

给你一个字符串 `s` ，其中包含字母顺序打乱的用英文单词表示的若干数字（`0-9`）。按 **升序** 返回原始的数字。

**示例 1：**

``` javascript
输入：s = "owoztneoer"
输出："012"
```

**示例 2：**

``` javascript
输入：s = "fviefuro"
输出："45"
```

**提示：**

- `1 <= s.length <= 1e5`
- `s[i]` 为 `["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]` 这些字符之一
- `s` 保证是一个符合题目要求的字符串

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 95.35|43.4 / 30.23|[非齐次线性方程组](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reconstruct-original-digits-from-english

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
