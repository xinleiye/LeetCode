/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const memoCache = new Map();
    const dfsSearch = (num) => {
        if (num === 1) {
            return 0;
        }
        const next = Math.floor(num / 2);

        if (!memoCache.has(num)) {
            if (num % 2 === 0) {
                memoCache.set(num, 1 + dfsSearch(next));
            } else {
                memoCache.set(num, 2 + Math.min(dfsSearch(next), dfsSearch(next + 1)));
            }
        }

        return memoCache.get(num);
    };

    return dfsSearch(n);
};
