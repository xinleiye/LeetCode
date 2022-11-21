# 解析布尔表达式

给你一个以字符串形式表述的 [布尔表达式](https://baike.baidu.com/item/%E5%B8%83%E5%B0%94%E8%A1%A8%E8%BE%BE%E5%BC%8F/1574380?fr=aladdin)（boolean） `expression`，返回该式的运算结果。

有效的表达式需遵循以下约定：

- `"t"`，运算结果为 `True`
- `"f"`，运算结果为 `False`
- `"!(expr)"`，运算过程为对内部表达式 `expr` 进行逻辑 **非的运算**（NOT）
- `"&(expr1,expr2,...)"`，运算过程为对 2 个或以上内部表达式 `expr1, expr2, ...` 进行逻辑 **与的运算**（AND）
- `"|(expr1,expr2,...)"`，运算过程为对 2 个或以上内部表达式 `expr1, expr2, ...` 进行逻辑 **或的运算**（OR）

**示例 1：**

``` javascript
输入：expression = "!(f)"
输出：true
```

**示例 2：**

``` javascript
输入：expression = "|(f,t)"
输出：true
```

**示例 3：**

``` javascript
输入：expression = "&(t,f)"
输出：false
```

**示例 4：**

``` javascript
输入：expression = "|(&(t,f,t),!(t))"
输出：false
```

**提示：**

- `1 <= expression.length <= 20000`
- `expression[i]` 由 `{'(', ')', '&', '|', '!', 't', 'f', ','}` 中的字符组成。
- `expression` 是以上述形式给出的有效表达式，表示一个布尔值。

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|68 / 64.71|41.8 / 91.18|[栈](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/parsing-a-boolean-expression

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
