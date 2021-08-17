/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let res = [];
    const maxCol = mat[0].length;
    const sumQueue = new MinPriorityQueue({ priority: (bid) => bid.value });;

    for (let i = 0, len = mat.length; i < len; i++) {
        let left = 0;
        let right = maxCol - 1;
        let pos = -1;

        while (left <= right) {
            const mid = (left + right) >>> 1;

            if (mat[i][mid] === 0) {
                right = mid - 1;
            } else {
                pos = mid;
                left = mid + 1;
            }
        }

        sumQueue.enqueue({
            index: i,
            value: (pos + 1) * 100 + i
        });
    }

    for (let i = 0; i < k; i++) {
        const sum = sumQueue.dequeue().element;

        res.push(sum.index);
    }

    return res;
};
