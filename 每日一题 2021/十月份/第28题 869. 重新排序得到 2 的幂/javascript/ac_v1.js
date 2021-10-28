/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const MAX = 1e9;
    const power2Set = new Set();
    const parseNum = (num) => {
        const arr = new Array(10).fill(0);

        while (num > 0) {
            arr[num % 10]++;
            num = Math.floor(num / 10);
        }

        return arr.join('');
    };

    for (let i = 1; i <= MAX; i = i << 1) {
        power2Set.add(parseNum(i));
    }

    return power2Set.has(parseNum(n));
};
