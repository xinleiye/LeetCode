/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const length = citations.length;
    let left = 0;
    let right = citations.length - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (citations[mid] >= length - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return length - left;
};
