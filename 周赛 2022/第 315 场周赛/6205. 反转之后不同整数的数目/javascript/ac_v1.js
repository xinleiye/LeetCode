/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const numSet = new Set();
    const reverse = (num) => {
        let res = 0;

        while (num) {
            res = res * 10 + num % 10;
            num = Math.floor(num / 10);
        }

        return res;
    };

    for (const n of nums) {
        numSet.add(n);
        numSet.add(reverse(n));
    }

    return numSet.size;
};
