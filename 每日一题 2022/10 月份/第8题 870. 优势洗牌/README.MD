# 优势洗牌

给定两个大小相等的数组 `nums1` 和 `nums2`，`nums1` 相对于 `nums2` 的优势可以用满足 `nums1[i] > nums2[i]` 的索引 `i` 的数目来描述。

返回 `nums1` 的 **任意** 排列，使其相对于 `nums2` 的优势最大化。

**示例 1：**

``` javascript
输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
输出：[2,11,7,15]
```

**示例 2：**

``` javascript
输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
输出：[24,32,8,12]
```

**提示：**

- `1 <= nums1.length <= 10^5`
- `nums2.length == nums1.length`
- `0 <= nums1[i], nums2[i] <= 10^9`

**解答：**

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|224 / 96.92|59.4 / 66.52|[朴素方法](./javascript/ac_v1.js)

来源：力扣（LeetCode）

链接：https://leetcode.cn/problems/advantage-shuffle

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
