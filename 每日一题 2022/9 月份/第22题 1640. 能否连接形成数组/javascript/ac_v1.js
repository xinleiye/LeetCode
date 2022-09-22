/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let index = 0;
    const total = arr.length;
    const pieceMap = new Map();

    for (let i = pieces.length -1 ; i >= 0; i--) {
        pieceMap.set(pieces[i][0], i);
    }
    while (index < total) {
        if (pieceMap.has(arr[index])) {
            const piece = pieces[pieceMap.get(arr[index])];

            for (const n of piece) {
                if (n === arr[index]) {
                    index++;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    return true;
};
