/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowMasks = new Array(9).fill(0);
    const colMasks = new Array(9).fill(0);
    const blockMasks = new Array(9).fill(0);
    const maskMap = {
        1: 1,
        2: 2,
        3: 4,
        4: 8,
        5: 16,
        6: 32,
        7: 64,
        8: 128,
        9: 256,
    };

    // get row mask
    for (let i = 0; i < 9; i++) {
        let mask = 0;
        const row = board[i];

        for (let j = 0; j < 9; j++) {
            const num = row[j];

            if (num !== '.') {
                if (mask & maskMap[num]) {
                    return false;
                }
                mask |= maskMap[num];
            }
        }
        rowMasks[i] = mask;
    }
    // get col mask
    for (let i = 0; i < 9; i++) {
        let mask = 0;

        for (let j = 0; j < 9; j++) {
            const num = board[j][i];

            if (num !== '.') {
                if (mask & maskMap[num]) {
                    return false;
                }
                mask |= maskMap[num];
            }
        }
        colMasks[i] = mask;
    }
    // get block mask
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            let mask = blockMasks[index];
            const num = board[i][j];

            if (num !== '.') {
                if (mask & maskMap[num]) {
                    return false;
                }
                mask |= maskMap[num];
                blockMasks[index] = mask;
            }
        }
    }

    return true;
};
