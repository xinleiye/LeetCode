/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const total = citations.length;
    const counter = new Array(total + 1).fill(0);
    let count = 0;

    for (const n of citations) {
        if (n >= total) {
            counter[total]++;
        } else {
            counter[n]++;
        }
    }
    for (let i = total; i >= 0; i--) {
        count += counter[i];
        if (count >= i) {
            return i;
        }
    }

    return 0;
};
