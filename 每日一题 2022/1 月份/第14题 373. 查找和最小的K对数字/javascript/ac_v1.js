/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const res = [];
    const LEN1 = nums1.length;
    const LEN2 = nums2.length;
    const minQueue = new MinPriorityQueue({
        priority: (item) => {
            return nums1[item[0]] + nums2[item[1]];
        }
    });

    for (let i = 0, len = Math.min(LEN1, k); i < len; i++) {
        minQueue.enqueue([i, 0]);
    }
    while (k-- > 0 && !minQueue.isEmpty()) {
        const [i1, i2] = minQueue.dequeue().element;

        res.push([nums1[i1], nums2[i2]]);
        if (i2 + 1 < LEN2) {
            minQueue.enqueue([i1, i2 + 1]);
        }
    }

    return res;
};
