# 重新排序得到 2 的幂

给定正整数 `N` ，我们按任何顺序（包括原始顺序）将数字重新排序，注意其前导数字不能为零。

如果我们可以通过上述方式得到 2 的幂，返回 `true`；否则，返回 `false`。

**示例 1：**

``` javascript
输入：1
输出：true
```

**示例 2：**

``` javascript
输入：10
输出：false
```

**示例 3：**

``` javascript
输入：16
输出：true
```

**示例 4：**

``` javascript
输入：24
输出：false
```

**示例 5：**

``` javascript
输入：46
输出：true
```

**提示：**

- `1 <= N <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|80 / 57.14|39.3 / 76.19|[哈希&预处理](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/reordered-power-of-2

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
