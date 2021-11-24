# 打乱数组

给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。

实现 `Solution` class:

- `Solution(int[] nums)` 使用整数数组 `nums` 初始化对象
- `int[] reset()` 重设数组到它的初始状态并返回
- `int[] shuffle()` 返回数组随机打乱后的结果

**示例：**

``` javascript
输入
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
输出
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

解释
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]
```

**提示：**

- `1 <= nums.length <= 200`
- `-1e6 <= nums[i] <= 1e6`
- `nums` 中的所有元素都是 **唯一的**
- 最多可以调用 `5 * 1e4` 次 `reset` 和 `shuffle`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|236 / 42.02|54.8 / 6.41|[朴素方法](./javascript/ac_v1.js)
2|javascript|264 / 16.51|53.9 / 11.73|[朴素方法](./javascript/ac_v2.js)
3|javascript|260 / 18.69|50.7 / 74.76|[Fisher-Yates 洗牌算法](./javascript/ac_v3.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/shuffle-an-array

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
