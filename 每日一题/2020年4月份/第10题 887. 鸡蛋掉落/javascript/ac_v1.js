/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    let dropResultMap = new Map();
    let dropEgg = (k, n) => {
        let res;
        let low = 1;
        let high = n;
        let mapKey = n * 1000 + k;

        if (dropResultMap.has(mapKey)) {
            return dropResultMap.get(mapKey);
        }
        if (k === 1) {
            res = n;
        } else if (n === 0) {
            res = 0;
        } else {
            while (low + 1 < high) {
                let mid = (low + high) >>> 1;
                let broken = dropEgg(k - 1, mid - 1);
                let noBroken = dropEgg(k, n - mid);

                if (broken < noBroken) {
                    low = mid;
                } else if (broken > noBroken) {
                    high = mid;
                } else {
                    low = mid;
                    high = mid;
                }
            }
            res = 1 + Math.min(Math.max(dropEgg(k - 1, low - 1), dropEgg(k, n - low)), Math.max(dropEgg(k - 1, high - 1), dropEgg(k, n - high)));
        }

        dropResultMap.set(mapKey, res);

        return res;
    };

    return dropEgg(K, N);
};
