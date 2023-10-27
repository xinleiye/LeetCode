/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((h1, h2) => h1 - h2);
    verticalCuts.sort((v1, v2) => v1 - v2);

    const mod = 1e9 + 7;
    let maxHor = 0;
    let maxVer = 0;
    let preHor = 0;
    let preVer = 0;
    for (const n of horizontalCuts) {
        maxHor = Math.max(maxHor, n - preHor);
        preHor = n;
    }
    maxHor = Math.max(maxHor, h - preHor);
    for (const v of verticalCuts) {
        maxVer = Math.max(maxVer, v - preVer);
        preVer = v;
    }
    maxVer = Math.max(maxVer, w - preVer);

    return (BigInt(maxHor) * BigInt(maxVer)) % BigInt(mod);
};
