# 按公因数计算最大组件大小

给定一个由不同正整数的组成的非空数组 `nums` ，考虑下面的图：

- 有 `nums.length` 个节点，按从 `nums[0]` 到 `nums[nums.length - 1]` 标记；
- 只有当 `nums[i]` 和 `nums[j]` 共用一个大于 1 的公因数时，`nums[i]` 和 `nums[j]` 之间才有一条边。

返回 图中最大连通组件的大小 。

**示例 1：**

![示例1](./eg1.png)

``` javascript
输入：nums = [4,6,15,35]
输出：4
```

**示例 2：**

![示例2](./eg2.png)

``` javascript
输入：nums = [20,50,9,63]
输出：2
```

**示例 3：**

![示例3](./eg3.png)

``` javascript
输入：nums = [2,3,6,7,4,12,21,39]
输出：8
```

**提示：**

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i] <= 10^5`
- `nums` 中所有值都 **不同**

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|?? / ??|?? / ??|[??](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/largest-component-size-by-common-factor

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
