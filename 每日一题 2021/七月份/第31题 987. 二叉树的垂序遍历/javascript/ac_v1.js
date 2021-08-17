/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const res = [];
    const cols = [];
    const rows = [];
    const posMap = new Map();
    const ascendingOrder = (val1, val2) => {
        return val1 - val2;
    };
    const dfs = (node, aCol, aRow) => {
        if (!node) {
            return;
        }
        if (posMap.has(aCol)) {
            const vals = posMap.get(aCol);
            
            if (vals.has(aRow)){
                vals.get(aRow).push(node.val);
            } else {
                vals.set(aRow, [node.val]);
            }
        } else {
            posMap.set(aCol, new Map());
            posMap.get(aCol).set(aRow, [node.val]);
            cols.push(aCol);
        }
        if (rows.indexOf(aRow) < 0) {
            rows.push(aRow);
        }
        dfs(node.left, aCol - 1, aRow + 1);
        dfs(node.right, aCol + 1, aRow + 1);0
    };

    dfs(root, 0, 0);
    cols.sort(ascendingOrder);
    rows.sort(ascendingOrder);
    cols.forEach(col => {
        const vals = [];
        const colVals = posMap.get(col);

        rows.forEach(row => {
            if (colVals.has(row)) {
                const rowVals = colVals.get(row);
                
                rowVals.sort(ascendingOrder);
                vals.push(...rowVals);
            }
        });
        res.push(vals);
    });

    return res;
};
