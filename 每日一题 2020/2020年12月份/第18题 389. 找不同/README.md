# 找不同

给定两个字符串 **s** 和 **t**，它们只包含小写字母。

字符串 **t** 由字符串 **s** 随机重排，然后在随机位置添加一个字母。

请找出在 **t** 中被添加的字母。

**示例 1：**

``` javascript
输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
```

**示例 2：**

``` javascript
输入：s = "", t = "y"
输出："y"
```

**示例 3：**

``` javascript
输入：s = "a", t = "aa"
输出："a"
```

**示例 4：**

``` javascript
输入：s = "ae", t = "aea"
输出："a"
```

**提示：**

- 0 <= s.length <= 1000
- t.length == s.length + 1
- s 和 t 只包含小写字母

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|108 / 22.04|38.3 / 93.20|[计数](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/find-the-difference

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
