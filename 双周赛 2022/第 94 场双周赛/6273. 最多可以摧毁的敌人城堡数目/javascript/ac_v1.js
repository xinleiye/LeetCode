/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let res = 0;
    const total = forts.length;
    let index = 0;

    while (index < total) {
        if (forts[index] !== 0) {
            const pre = forts[index];
            let next = index + 1;

            while (next < total && forts[next] === 0) {
                next++;
            }
            if (forts[next] + pre === 0) {
                res = Math.max(res, next - index - 1);
            }
            index = next;
        } else {
            index++;
        }
    }

    return res;
};
