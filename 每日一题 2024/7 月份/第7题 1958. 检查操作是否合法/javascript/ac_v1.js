/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    let res = false;
    const maxLine = 8;
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    const midColor = color === "W" ? "B" : "W";
    const isValid = (aRow, aCol, max) => {
        return aRow >= 0 && aRow < maxLine && aCol >= 0 && aCol < max;
    };
    
    for(const [r, c] of directions) {
        let length = 1;
        let row = r + rMove;
        let col = c + cMove;
        
        while (isValid(row, col, maxLine)) {
            if (board[row][col] === midColor) {
                length++;
            } else {
                break;
            }
            row += r;
            col += c;
        }
        if (isValid(row, col, maxLine) && board[row][col] === color && length >= 2) {
            return true;
        }
    }
    
    return false;
};
