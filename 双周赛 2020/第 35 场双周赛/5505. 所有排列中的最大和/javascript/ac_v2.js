/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function(nums, requests) {
    let res = 0;
    let mod = 1e9 + 7;
    let freq = new Array(nums.length + 1).fill(0);

    requests.forEach(req => {
        freq[req[0]]++;
        freq[req[1] + 1]--;
    });

    for (let i = 1; i <= nums.length; i++) {
        freq[i] += freq[i - 1];
    }

    freq.sort((val1, val2) => {
        return val2 - val1;
    });
    nums.sort((val1, val2) => {
        return val2 - val1;
    });

    // 此处未遍历 freq 的最后一个元素，因位置 n 不会出现在 requests 中，freq[n] 恒为 0。
    for (let i = 0; i < nums.length; i++) {
        res = (res + nums[i] * freq[i]) % mod;
    }

    return res;
};
