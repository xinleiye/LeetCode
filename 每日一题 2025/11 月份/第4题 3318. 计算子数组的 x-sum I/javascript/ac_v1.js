/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const total = nums.length;
    let left = 0;
    let right = 0;
    const count = new Array(51).fill(0);
    const res = new Array(total - k + 1);

    while (right < total) {
        count[nums[right]]++;
        if (right >= k - 1) {
            res[right - k + 1] = calcSumX(count, x);
            count[nums[left]]--;
            left++;
        }
        right++;
    }

    return res;
};

function calcSumX(counts, x) {
    let sum = 0;
    const objArr = [];

    for (let i = 1; i < 51; i++) {
        if (counts[i]) {
            objArr.push({
                val: i,
                count: counts[i]
            });
        }
    }
    objArr.sort((o1, o2) => {
        if (o1.count !== o2.count) {
            return o2.count - o1.count;
        } else {
            return o2.val - o1.val;
        }
    });
    for (let i = 0; i < Math.min(x, objArr.length); i++) {
        sum += objArr[i].val * objArr[i].count;
    }

    return sum;
}
