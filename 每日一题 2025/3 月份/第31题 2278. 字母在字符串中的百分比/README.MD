# 字母在字符串中的百分比

给你一个字符串 `s` 和一个字符 `letter` ，返回在 `s` 中等于 `letter` 字符所占的 **百分比** ，向下取整到最接近的百分比。

**示例 1：**

``` javascript
输入：s = "foobar", letter = "o"
输出：33
解释：
等于字母 'o' 的字符在 s 中占到的百分比是 2 / 6 * 100% = 33% ，向下取整，所以返回 33 。
```

**示例 2：**

``` javascript
输入：s = "jjjj", letter = "k"
输出：0
解释：
等于字母 'k' 的字符在 s 中占到的百分比是 0% ，所以返回 0 。
```

**提示：**

- `1 <= s.length <= 100`
- `s` 由小写英文字母组成
- `letter` 是一个小写英文字母

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|1 / 33.33|54.10 / 19.05|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/percentage-of-letter-in-string

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
