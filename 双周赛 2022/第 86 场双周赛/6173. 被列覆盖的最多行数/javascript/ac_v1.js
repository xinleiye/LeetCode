/**
 * @param {number[][]} mat
 * @param {number} cols
 * @return {number}
 */
var maximumRows = function(mat, cols) {
    const maxRow = mat.length;
    const maxCol = mat[0].length;
    const rowMask = new Array(maxRow);
    for (let i = 0; i < maxRow; i++) {
        rowMask[i] = parseInt(mat[i].join(""), 2);
    }

    const clacBit1 = (num) => {
        let count = 0;

        while (num) {
            if (num & 1) {
                count++;
            }
            num = num >>> 1;
        }

        return count;
    };
    const choiced = [];
    for (let i = 1, len = Math.pow(2, maxCol); i < len; i++) {
        if (clacBit1(i) === cols) {
            choiced.push(i);
        }
    }

    let res = 0;
    for (const c of choiced) {
        const masks = new Array(maxRow);

        for (let i = 0; i < maxRow; i++) {
            let mask = 0;

            for (let j = 0; j < maxCol; j++) {
                mask = mask << 1;
                if (c & (1 << j)) {
                    mask = mask | mat[i][j];
                }
            }
            masks[i] = mask;
        }

        let rows = 0;
        for (let i = 0; i < maxRow; i++) {
            if (masks[i] === rowMask[i]) {
                rows++;
            }
        }
        res = Math.max(res, rows);
    }

    return res;
};
