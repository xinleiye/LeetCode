/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const totalQuery = queries.length;
    const totalNum = nums.length;
    const sumArr = new Array(totalNum + 1);
    const res = new Array(totalQuery);

    nums.sort((n1, n2) => n1 - n2);
    sumArr[0] = 0;
    for (let i = 0; i < totalNum; i++) {
        sumArr[i + 1] = sumArr[i] + nums[i];
    }
    for (let i = 0; i < totalQuery; i++) {
        res[i] = binarySearch(sumArr, queries[i]) - 1;
    }

    return res;
};

function binarySearch (arr, tar) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = left + ((right - left) >>> 1);

        if (arr[mid] > tar) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
