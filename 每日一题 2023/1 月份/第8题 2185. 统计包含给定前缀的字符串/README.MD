# 统计包含给定前缀的字符串

给你一个字符串数组 `words` 和一个字符串 `pref` 。

返回 `words` 中以 `pref` 作为 **前缀** 的字符串的数目。

字符串 `s` 的 **前缀** 就是 `s` 的任一前导连续字符串。

**示例 1：**

``` javascript
输入：words = ["pay","attention","practice","attend"], pref = "at"
输出：2
解释：以 "at" 作为前缀的字符串有两个，分别是："attention" 和 "attend" 。
```

**示例 2：**

``` javascript
输入：words = ["leetcode","win","loops","success"], pref = "code"
输出：0
解释：不存在以 "code" 作为前缀的字符串。
```

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length, pref.length <= 100`
- `words[i]` 和 `pref` 由小写英文字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 34.09|41.9 / 40.91|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/counting-words-with-a-given-prefix

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
