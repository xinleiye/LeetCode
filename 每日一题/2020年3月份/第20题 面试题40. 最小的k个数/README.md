# 最小的k个数

输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：

``` javascript
输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
```

示例 2：

``` javascript
输入：arr = [0,1,2,1], k = 1
输出：[0]
```

限制：

- 0 <= k <= arr.length <= 10000
- 0 <= arr[i] <= 10000

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|148 / 35.69|39.4 / 100|[排序](./javascript/ac_v1.js)
2|javascript|116 / 81.99|40.8 / 100|[最小堆](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
