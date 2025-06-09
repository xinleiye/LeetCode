/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
    let pow10 = getPow10(n);
    const subtreeSize = (root) => {
        let size = (pow10 - 1) / 9;
        const left = root * pow10;
        const right = (root + 1) * pow10;

        if (left <= n) {
            size += Math.min(right, n + 1) - left;
        }

        return size;
    };
    let node = 1;

    k--;
    while (k > 0) {
        const size = subtreeSize(node);

        if (size <= k) {
            node++;
            k -= size;
        } else {
            pow10 /= 10;
            node *= 10;
            k--;
        }
    }

    return node;
};

function getPow10(num) {
    let pow = 1;

    while (num >= 10) {
        pow *= 10;
        num = Math.floor(num / 10);
    }

    return pow;
}
