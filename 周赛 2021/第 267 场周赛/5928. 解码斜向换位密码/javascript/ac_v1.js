/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    let res = [];
    const charMatrix = [];
    const cols = encodedText.length / rows;
    let curIndex = 0;
    let startCol = 0;

    while (curIndex < encodedText.length) {
        charMatrix.push(encodedText.substr(curIndex, cols).split(""));
        curIndex += cols;
    }

    while (startCol < cols) {
        let curRow = 0;
        let curCol = startCol;

        while (curRow < rows && curCol < cols) {
            res.push(charMatrix[curRow][curCol]);
            curRow++;
            curCol++;
        }
        startCol++;
    }

    return res.join("").trimEnd();
};
