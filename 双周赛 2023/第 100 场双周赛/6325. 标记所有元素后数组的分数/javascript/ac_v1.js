/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const total = nums.length;
    const sortedIndex = new Array(total).fill(0).map((_, index) => index);
    const signed = new Array(total).fill(false);
    let score = 0;
    let index = 0;

    sortedIndex.sort((i1, i2) => nums[i1] - nums[i2]);
    while (index < total) {
        while (index < total && signed[sortedIndex[index]]) {
            index++;
        }
        if (index < total) {
            const cur = sortedIndex[index];

            score += nums[cur];
            signed[cur] = true;
            if (cur - 1 >= 0) {
                signed[cur - 1] = true;
            }
            if (cur + 1 < total) {
                signed[cur + 1] = true;
            }
            index++;
        }
    }

    return score;
};
