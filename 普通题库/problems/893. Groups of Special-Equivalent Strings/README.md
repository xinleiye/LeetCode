# Groups of Special-Equivalent Strings

You are given an array A of strings.

A move onto S consists of swapping any two even indexed characters of S, or any two odd indexed characters of S.

Two strings S and T are special-equivalent if after any number of moves onto S, S == T.

For example, S = "zzxy" and T = "xyzz" are special-equivalent because we may make the moves "zzxy" -> "xzzy" -> "xyzz" that swap S[0] and S[2], then S[1] and S[3].

Now, a group of special-equivalent strings from A is a non-empty subset of A such that:
- Every pair of strings in the group are special equivalent, and;
- The group is the largest size possible (ie., there isn't a string S not in the group such that S is special equivalent to every string in the group)

Return the number of groups of special-equivalent strings from A.
 
**Example 1:**

``` javascript
Input: ["abcd","cdab","cbad","xyzz","zzxy","zzyx"]
Output: 3
Explanation:
One group is ["abcd", "cdab", "cbad"], since they are all pairwise special equivalent, and none of the other strings are all pairwise special equivalent to these.

The other two groups are ["xyzz", "zzxy"] and ["zzyx"].  Note that in particular, "zzxy" is not special equivalent to "zzyx".
```

**Example 2:**

``` javascript
Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
```

**Note:**
- 1 <= A.length <= 1000
- 1 <= A[i].length <= 20
- All A[i] have the same length.
- All A[i] consist of only lowercase letters.

解答：

**#**|**编程语言**|**时间（ms / %）**|**内存（MB / %）**|**代码**
--|--|--|--|--
1|javascript|84 / 93.18|38.2 / 100|[正常方法](./javascript/ac_v1.js)
2|javascript|104 / 31.82|37.4 / 100|[正常方法](./javascript/ac_v2.js)

来源：力扣（LeetCode）

链接：https://leetcode-cn.com/problems/groups-of-special-equivalent-strings

著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
