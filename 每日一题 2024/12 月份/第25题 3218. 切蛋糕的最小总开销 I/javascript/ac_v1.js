/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} horizontalCut
 * @param {number[]} verticalCut
 * @return {number}
 */
var minimumCost = function(m, n, horizontalCut, verticalCut) {
    let hIndex = 0;
    let vIndex = 0;
    let hBlock = 1;
    let vBlock = 1;
    let res = 0;

    horizontalCut.sort((h1, h2) => h2 - h1);
    verticalCut.sort((v1, v2) => v2 - v1);
    while (hIndex < m - 1 || vIndex < n - 1) {
        const hMax = hIndex < m - 1 ? horizontalCut[hIndex] : 0;
        const vMax = vIndex < n - 1 ? verticalCut[vIndex] : 0;

        if (hMax > vMax) {
            res += vBlock * hMax;
            hBlock++;
            hIndex++;
        } else {
            res += hBlock * vMax;
            vBlock++;
            vIndex++;
        }
    }

    return res;
};
