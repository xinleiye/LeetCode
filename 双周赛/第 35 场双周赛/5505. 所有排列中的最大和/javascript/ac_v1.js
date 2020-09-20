/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function(nums, requests) {
    let res = 0;
    let mod = 1e9 + 7;
    let freq = new Array(nums.length).fill(0);

    requests.forEach(req => {
        for (let i = req[0]; i <= req[1]; i++) {
            freq[i]++;
        }
    });

    nums.sort((val1, val2) => {
        return val2 - val1;
    });
    
    freq.sort((val1, val2) => {
        return val2 - val1;
    });
    
    for (let i = 0; i < nums.length; i++) {
        res = (res + freq[i] * nums[i]) % mod;
    }

    return res;
};
