# 驼峰式匹配

如果我们可以将 **小写字母** 插入模式串 `pattern` 得到待查询项 `query`，那么待查询项与给定模式串匹配。（我们可以在任何位置插入每个字符，也可以插入 0 个字符。）

给定待查询列表 `queries`，和模式串 `pattern`，返回由布尔值组成的答案列表 `answer`。只有在待查项 `queries[i]` 与模式串 `pattern` 匹配时，`answer[i]` 才为 `true`，否则为 `false`。

**示例 1：**

``` javascript
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
输出：[true,false,true,true,false]
示例：
"FooBar" 可以这样生成："F" + "oo" + "B" + "ar"。
"FootBall" 可以这样生成："F" + "oot" + "B" + "all".
"FrameBuffer" 可以这样生成："F" + "rame" + "B" + "uffer".
```

**示例 2：**

``` javascript
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
输出：[true,false,true,false,false]
解释：
"FooBar" 可以这样生成："Fo" + "o" + "Ba" + "r".
"FootBall" 可以这样生成："Fo" + "ot" + "Ba" + "ll".
```

**示例 3：**

``` javascript
输入：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
输出：[false,true,false,false,false]
解释：
"FooBarTest" 可以这样生成："Fo" + "o" + "Ba" + "r" + "T" + "est".
```

**提示：**

- `1 <= queries.length <= 100`
- `1 <= queries[i].length <= 100`
- `1 <= pattern.length <= 100`
- 所有字符串都仅由大写和小写英文字母组成。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|64 / 48.57|40.6 / 100.00|[贪心&双指针](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/camelcase-matching

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
