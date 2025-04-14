/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let res = 0;
    const total = arr.length;

    for (let i = 0; i < total; i++) {
        for (let j = i + 1; j < total; j++) {
            const d1 = Math.abs(arr[i] - arr[j]);

            if (d1 <= a) {
                for (let k = j + 1; k < total; k++) {
                    if ((Math.abs(arr[j] - arr[k]) <= b) && (Math.abs(arr[i] - arr[k]) <= c)) {
                        res++;
                    }
                }
            }
        }
    }

    return res;
};
