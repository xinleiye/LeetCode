# 判断句子是否为全字母句

**全字母句** 指包含英语字母表中每个字母至少一次的句子。

给你一个仅由小写英文字母组成的字符串 `sentence` ，请你判断 `sentence` 是否为 **全字母句** 。

如果是，返回 `true` ；否则，返回 `false` 。

**示例 1：**

``` javascript
输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
输出：true
解释：sentence 包含英语字母表中每个字母至少一次。
```

**示例 2：**

``` javascript
输入：sentence = "leetcode"
输出：false
```

**提示：**

- `1 <= sentence.length <= 1000`
- `sentence` 由小写英语字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|60 / 72.53|41.6 / 31.32|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/check-if-the-sentence-is-pangram

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
