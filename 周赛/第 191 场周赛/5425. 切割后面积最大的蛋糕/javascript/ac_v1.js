/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    let res = 0;
    let mod = 1e9 + 7;
    let maxHor = 0;
    let maxVer = 0;
    
    horizontalCuts.sort((val1, val2) => {
        return val1 - val2;
    });
    verticalCuts.sort((val1, val2) => {
        return val1 - val2;
    });

    horizontalCuts.forEach((val, index) => {
        if (index > 0) {
            maxHor = Math.max(maxHor, val - horizontalCuts[index - 1]);
        } else {
            maxHor = Math.max(maxHor, val);
        }
    });
    maxHor = Math.max(maxHor, h - horizontalCuts[horizontalCuts.length - 1]);

    verticalCuts.forEach((val, index) => {
        if (index > 0) {
            maxVer = Math.max(maxVer, val - verticalCuts[index - 1]);
        } else {
            maxVer = Math.max(maxVer, val);
        }
    });
    maxVer = Math.max(maxVer, w - verticalCuts[verticalCuts.length - 1]);

    return (maxHor * maxVer) % mod;
};
