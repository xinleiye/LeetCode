/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const length = envelopes.length;
    const res = [];

    if (length === 0) {
        return 0;
    }

    envelopes.sort((item1, item2) => {
        if (item1[0] !== item2[0]) {
            return item1[0] - item2[0];
        } else {
            return item2[1] - item1[1];
        }
    });

    res.push(envelopes[0][1]);
    for (let i = 1; i < length; i++) {
        const height = envelopes[i][1];

        if (height > res[res.length - 1]) {
            res.push(height);
        } else {
            res[binarySearch(res, height)] = height;
        }
    }

    return res.length;
};

function binarySearch (arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = (left + right) >>> 1;

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
