# Fizz Buzz

给你一个整数 `n`，找出从 `1` 到 `n` 各个整数的 Fizz Buzz 表示，并用字符串数组 `answer`（**下标从 1 开始**）返回结果，其中：

- `answer[i] == "FizzBuzz"` 如果 `i` 同时是 `3` 和 `5` 的倍数。
- `answer[i] == "Fizz"` 如果 `i` 是 `3` 的倍数。
- `answer[i] == "Buzz"` 如果 `i` 是 `5` 的倍数。
- `answer[i] == i` 如果上述条件全不满足。

**示例 1：**

``` javascript
输入：n = 3
输出：["1","2","Fizz"]
```

**示例 2：**

``` javascript
输入：n = 5
输出：["1","2","Fizz","4","Buzz"]
```

**示例 3：**

``` javascript
输入：n = 15
输出：["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

**提示：**

- `1 <= n <= 1e4`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|80 / 47.57|40.1 / 31.55|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/fizz-buzz

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
