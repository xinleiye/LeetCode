/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let length = new Array(n + 1).fill(0);
    let search = (n, k) => {
        let res;

        if (n === 1) {
            return "0";
        }
        if (length[n - 1] >= k) {
            return search(n - 1, k);
        }
        if (length[n - 1] + 1 === k) {
            return "1";
        }
        // length[n - 1] - (k - (length[n - 1] + 1)) + 1(k 从1开始计数)
        res = search(n - 1, 2 * length[n - 1] - k + 2);
        
        return res === "1" ? "0" : "1";
    };

    for (let i = 1; i <= n; i++) {
        length[i] = length[i - 1] * 2 + 1;
    }

    return search(n, k);
};
