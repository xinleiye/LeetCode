# “气球” 的最大数量

给你一个字符串 `text`，你需要使用 `text` 中的字母来拼凑尽可能多的单词 **"balloon"（气球）**。

字符串 `text` 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 **"balloon"**。

**示例 1：**

![示例1](./eg1.jpeg)

``` javascript
输入：text = "nlaebolko"
输出：1
```

**示例 2：**

![示例2](./eg2.jpeg)

``` javascript
输入：text = "loonbalxballpoon"
输出：2
```

**示例 3：**

``` javascript
输入：text = "leetcode"
输出：0
```

**提示：**

- `1 <= text.length <= 10^4`
- `text` 全部由小写英文字母组成

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 90.07|42.6 / 12.77|[哈希计数](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/maximum-number-of-balloons

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
