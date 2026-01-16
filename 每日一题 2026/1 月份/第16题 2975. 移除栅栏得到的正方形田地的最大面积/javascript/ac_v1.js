/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function(m, n, hFences, vFences) {
    const MOD = 1e9 + 7;
    // 所有可能的水平距离
    const hDis = Array.from(getDis(hFences, m));
    // 所有可能的垂直距离
    const vDis = getDis(vFences, n);
    let maxDis = -1;

    for (const h of hDis) {
        if (vDis.has(h)) {
            maxDis = Math.max(maxDis, h);
        }
    }

    return maxDis === -1 ? -1 : Number((BigInt(maxDis) * BigInt(maxDis)) % BigInt(MOD));
};

function getDis(arr, max) {
    const disSet = new Set();
    const total = arr.length + 2;

    arr.sort((n1, n2) => n1 - n2);
    arr.unshift(1);
    arr.push(max);
    for (let i = 1; i < total; i++) {
        for (let j = i - 1; j >= 0; j--) {
            disSet.add(arr[i] - arr[j]);
        }
    }

    return disSet;
}
