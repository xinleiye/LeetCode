# 寻找比目标字母大的最小字母

给你一个字符数组 `letters`，该数组按 **非递减顺序** 排序，以及一个字符 `target`。`letters` 里 **至少有两个不同** 的字符。

返回 `letters` 中大于 `target` 的最小的字符。如果不存在这样的字符，则返回 `letters` 的第一个字符。

**示例 1：**

```
输入: letters = ['c', 'f', 'j']，target = 'a'
输出: 'c'
解释：letters 中字典上比 'a' 大的最小字符是 'c'。
```

**示例 2：**

```
输入: letters = ['c','f','j'], target = 'c'
输出: 'f'
解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。
```

**示例 3：**

```
输入: letters = ['x','x','y','y'], target = 'z'
输出: 'x'
解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。
```

**提示：**

- `2 <= letters.length <= 10^4`
- `letters[i]` 是一个小写字母
- `letters` 按 **非递减顺序** 排序
- `letters` 最少包含两个不同的字母
- `target` 是一个小写字母

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|1 / 25.90|55.68 / 45.18|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/find-smallest-letter-greater-than-target

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
