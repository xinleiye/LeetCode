# 统计字符串中的元音子字符串

**子字符串** 是字符串中的一个连续（非空）的字符序列。

**元音子字符串** 是 **仅** 由元音（`'a'`、`'e'`、`'i'`、`'o'` 和 `'u'`）组成的一个子字符串，且必须包含 **全部五种** 元音。

给你一个字符串 `word` ，统计并返回 `word` 中 **元音子字符串的数目** 。

**示例 1：**

``` javascript
输入：word = "aeiouu"
输出：2
解释：下面列出 word 中的元音子字符串（斜体加粗部分）：
- "[aeiou]u"
- "[aeiouu]"
```

**示例 2：**

``` javascript
输入：word = "unicornarihan"
输出：0
解释：word 中不含 5 种元音，所以也不会存在元音子字符串。
```

**示例 3：**

``` javascript
输入：word = "cuaieuouac"
输出：7
解释：下面列出 word 中的元音子字符串（斜体加粗部分）：
- "c[uaieuo]uac"
- "c[uaieuou]ac"
- "c[uaieuoua]c"
- "cu[aieuo]uac"
- "cu[aieuou]ac"
- "cu[aieuoua]c"
- "cua[ieuoua]c"
```

**示例 4：**

``` javascript
输入：word = "bbaeixoubb"
输出：0
解释：所有包含全部五种元音的子字符串都含有辅音，所以不存在元音子字符串。
```

**提示：**

- `1 <= word.length <= 100`
- `word` 仅由小写英文字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|108 / 100|40 / 100|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/count-vowel-substrings-of-a-string

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
