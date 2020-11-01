/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    let arrIndex = 0;

    while (arrIndex < arr.length) {
        let pieceIndex = 0;

        while (pieceIndex < pieces.length) {
            if (arr[arrIndex] === pieces[pieceIndex][0]) {
                break;
            }
            pieceIndex++;
        }

        if (pieceIndex === pieces.length) {
            return false;
        }
        for (let i = 0; i < pieces[pieceIndex].length; i++) {
            if (arr[arrIndex] !== pieces[pieceIndex][i]) {
                return false;
            }
            arrIndex++;
        }
    }

    return true;
};
