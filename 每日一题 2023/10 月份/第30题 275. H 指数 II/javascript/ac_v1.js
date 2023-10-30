/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const total = citations.length;
    let left = 0;
    let right = total - 1;

    while (left <= right) {
        const mid = (left + right) >>> 1;

        if (citations[mid] >= total - mid) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return total - left;
};
