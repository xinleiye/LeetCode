/**
 * @param {number[]} nums
 * @return {number}
 */
 var totalHammingDistance = function(nums) {
    let res = 0;
    const bitCount = new Array(32).fill(0);
    const total = nums.length;

    nums.forEach(num => {
        let index = 0;

        while (num) {
            if (num & 1) {
                bitCount[index]++;
            }
            index++;
            num = num >>> 1;
        }
    });

    for (let i = 0; i < 32; i++) {
        res += (total - bitCount[i]) * bitCount[i];
    }

    return res;
};
