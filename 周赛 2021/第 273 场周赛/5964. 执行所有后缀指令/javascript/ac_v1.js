/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const res = new Array(s.length).fill(0);
    const total = s.length;
    const directions = {
        U: [-1, 0],
        R: [0, 1],
        D: [1, 0],
        L: [0, -1],
    };
    const isInvalid = (row, col, max) => {
        return row < 0 || row >= max || col < 0 || col >= max;
    };
    const moveSteps = (row, col, start) => {
        let steps = 0;
        let curRow = row;
        let curCol = col;
        let index = start;

        while (index < total) {
            let dir = directions[s[index]];

            curRow += dir[0];
            curCol += dir[1];
            index++;
            if (!isInvalid(curRow, curCol, n)) {
                steps++;
            } else {
                return steps;
            }
        }

        return steps;
    };

    for (let i = 0; i < total; i++) {
        res[i] = moveSteps(startPos[0], startPos[1], i);
    }

    return res;
};
