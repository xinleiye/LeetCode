/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let res = 0;
    let mod = 1e9 + 7;
    let odd = new Array(arr.length).fill(0);

    odd[0] = arr[0] % 2;

    // odd[i] 以 arr[i] 为右边界和为奇数的子数组数量: 
    // arr[i] 为奇数: odd[i] = 以 arr[i - 1] 为右边界和为偶数的子数组数量 + 1
    // arr[i] 为偶数: odd[i] = 以 arr[i - 1] 为右边界和为奇数的子数组数量
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd[i] = 1 + (i - odd[i - 1]);
        } else {
            odd[i] = odd[i - 1];
        }
    }
    
    odd.forEach(val => {
        res = (res + val) % mod;
    });

    return res;
};
