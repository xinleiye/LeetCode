/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const res = [];
    const total1 = nums1.length;
    const total2 = nums2.length;
    let index1 = 0;
    let index2 = 0;

    while (index1 < total1 || index2 < total2) {
        const [id1, val1] = index1 < total1 ? nums1[index1] : [1000, 0];
        const [id2, val2] = index2 < total2 ? nums2[index2] : [1000, 0];
        const cur = [0, 0];

        if (id1 < id2) {
            cur[0] = id1;
            cur[1] = val1;
            index1++;
        } else if (id1 > id2) {
            cur[0] = id2;
            cur[1] = val2;
            index2++;
        } else {
            cur[0] = id1;
            cur[1] = val1 + val2;
            index1++;
            index2++;
        }
        res.push(cur);
    }

    return res;
};
