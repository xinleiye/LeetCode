/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    const maxLine = 8;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const mid = color === "W" ? "B" : "W";
    const isValid = (aRow, aCol, max) => {
        return aRow >= 0 && aRow < maxLine && aCol >= 0 && aCol < max;
    };
    
    for(const dir of directions) {
        let length = 1;
        let row = dir[0] + rMove;
        let col = dir[1] + cMove;
        
        while (isValid(row, col, maxLine)) {
            if (board[row][col] === mid) {
                length++;
            } else {
                break;
            }
            row += dir[0];
            col += dir[1];
        }
        if (isValid(row, col, maxLine) && board[row][col] === color && length >= 2) {
            return true;
        }
    }
    
    return false;
};
