# 连续字符

给你一个字符串 `s` ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

请你返回字符串的能量。

**示例 1：**

``` javascript
输入：s = "leetcode"
输出：2
解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。
```

**示例 2：**

``` javascript
输入：s = "abbcccddddeeeeedcba"
输出：5
解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
```

**示例 3：**

``` javascript
输入：s = "triplepillooooow"
输出：5
```

**示例 4：**

``` javascript
输入：s = "hooraaaaaaaaaaay"
输出：11
```

**示例 5：**

``` javascript
输入：s = "tourist"
输出：1
```

**提示：**

- `1 <= s.length <= 500`
- `s` 只包含小写英文字母。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|76 / 70.75|39.3 / 84.35|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/consecutive-characters

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
