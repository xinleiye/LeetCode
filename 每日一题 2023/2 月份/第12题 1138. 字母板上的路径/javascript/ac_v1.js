/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    const res = [];
    let curRow = 0;
    let curCol = 0;

    for (const ch of target) {
        let nextRow = Math.floor((ch.charCodeAt() - 97) / 5);
        let nextCol = (ch.charCodeAt() - 97) % 5;

        // 向上，U
        if (nextRow < curRow) {
            res.push("U".repeat(curRow - nextRow));
        }
        // 向左，L
        if (nextCol < curCol) {
            res.push("L".repeat(curCol - nextCol));
        }
        // 向下，D
        if (nextRow > curRow) {
            res.push("D".repeat(nextRow - curRow));
        }
        // 向右，R
        if (nextCol > curCol) {
            res.push("R".repeat(nextCol - curCol));
        }
        res.push("!");
        curRow = nextRow;
        curCol = nextCol;
    }

    return res.join("");
};
