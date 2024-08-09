/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minimumAddedInteger = function(nums1, nums2) {
    nums1.sort((n1, n2) => n1 - n2);
    nums2.sort((n1, n2) => n1 - n2);

    let res = 1000;
    const len1 = nums1.length;
    const len2 = nums2.length;
    for (let i = 0; i < len1; i++) {
        for (let j = i + 1; j < len1; j++) {
            const arr1 = [];
            for (let k = 0; k < len1; k++) {
                if (k !==i && k !== j) {
                    arr1.push(nums1[k]);
                }
            }

            let valid = true;
            let diff = nums2[0] - arr1[0];
            for (let k = 0; k < len2; k++) {
                if (nums2[k] - arr1[k] !== diff) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                res = Math.min(res, diff);
            }
        }
    }

    return res;
};
