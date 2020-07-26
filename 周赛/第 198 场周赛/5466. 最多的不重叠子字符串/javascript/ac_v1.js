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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let res = 0;
    let addMap = (map, deep, num, limit) => {
        if (deep >= limit) {
            return;
        }
        if (map.has(deep)) {
            map.set(deep, map.get(deep) + num);
        } else {
            map.set(deep, num);
        }
    };
    let dfs = (node, distance) => {
        let leafMap = new Map();
        let leftLeafMap;
        let rightLeafMap;

        if (!node) {
            return leafMap;
        }
        if (!node.left && !node.right) {
            leafMap.set(1, 1);

            return leafMap;
        }

        leftLeafMap = dfs(node.left, distance);
        rightLeafMap = dfs(node.right, distance);

        if (leftLeafMap.size === 0) {
            rightLeafMap.forEach((val, deep) => {
                addMap(leafMap, deep + 1, val, distance);
            });

            return leafMap;
        }
        if (rightLeafMap.size === 0) {
            leftLeafMap.forEach((val, deep) => {
                addMap(leafMap, deep + 1, val, distance);
            });

            return leafMap;
        }
        leftLeafMap.forEach((val1, deep1) => {
            addMap(leafMap, deep1 + 1, val1, distance);
            rightLeafMap.forEach((val2, deep2) => {
                if (deep1 + deep2 <= distance) {
                    res += val1 * val2;
                }
            });
        });
        rightLeafMap.forEach((val, deep) => {
            addMap(leafMap, deep + 1, val, distance);
        });

        return leafMap;
    };
    
    dfs(root, distance);
    
    return res;
};
