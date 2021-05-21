/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const res = new Array(box[0].length);
    const maxRow = box.length;
    const maxCol = box[0].length;

    for (let i = 0; i < maxCol; i++) {
        res[i] = new Array(maxRow);
    }
    // 顺时针旋转90度
    for (let i = 0; i < maxCol; i++) {
        for (let j = maxRow - 1; j >= 0; j--) {
            res[i][maxRow - 1 - j] = box[j][i];
        }
    }

    for (let i = 0; i < maxRow; i++) {
        let pos = maxCol - 1;

        for (let j = maxCol - 1; j >= 0; j--) {
            if (res[j][i] === "#") {
                if (j !== pos) {
                    res[pos][i] = "#";
                    res[j][i] = ".";
                }
                pos--;
            } else if (res[j][i] === "*") {
                pos = j - 1;
            }
        }
    }

    return res;
};
