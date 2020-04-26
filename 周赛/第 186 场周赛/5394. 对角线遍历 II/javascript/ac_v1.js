/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let res = [];
    let rowLen = nums.length;
    let colLen = 0;
    let posSet = new Set();
    let nodes = [];
    let pos2Flag = (row, col) => {
        return row * 1e5 + col;
    };
    let directions = [[1, 0], [0, 1]];

    nums.forEach(aNums => {
        colLen = Math.max(colLen, aNums.length);
    });
    
    nodes.push([0, 0]);
    posSet.add(pos2Flag(0, 0));
    
    while (nodes.length) {
        let newNodes = [];
        
        for (let i = 0; i < nodes.length; i++) {
            let aRow = nodes[i][0];
            let aCol = nodes[i][1];
            
            res.push(nums[aRow][aCol]);
            for (let j = 0; j < 2; j++) {
                let row = aRow + directions[j][0];
                let col = aCol + directions[j][1];

                if (row >= 0 && row < rowLen && col >= 0 && col < colLen && nums[row] && nums[row][col] && !posSet.has(pos2Flag(row, col))) {
                    newNodes.push([row, col]);
                    posSet.add(pos2Flag(row, col));
                }
            }
        }

        nodes = newNodes;
    }

    return res;
};
