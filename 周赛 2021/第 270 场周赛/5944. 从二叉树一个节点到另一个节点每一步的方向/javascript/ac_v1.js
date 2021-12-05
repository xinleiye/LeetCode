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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const commonAncestor = getLowestCommonAncestor(root, startValue, destValue);

    if (commonAncestor.val === startValue) {
        return getNodePath(commonAncestor, destValue).join("");
    } else if (commonAncestor.val === destValue) {
        const path = [];
        const startPath = getNodePath(commonAncestor, startValue);
        
        for (let i = 0; i < startPath.length; i++) {
            path.push("U");
        }

        return path.join("");
    } else {
        const path = [];
        const startPath = getNodePath(commonAncestor, startValue);
        const destPath = getNodePath(commonAncestor, destValue);

        for (let i = 0; i < startPath.length; i++) {
            path.push("U");
        }
        return path.join("") + destPath.join("");
    }
};

function getNodePath(root, nodeVal) {
    let res;
    let got = false;
    const path = [];
    const dfs = (node, val) => {
        if (got || !node) {
            return;
        }
        if (node.val === val) {
            res = path.slice(0);
            got = true;

            return;
        }
        path.push("L");
        dfs(node.left, val);
        path.pop();
        path.push("R");
        dfs(node.right, val, "R");
        path.pop();
    };

    dfs(root, nodeVal);

    return res;
}

function getLowestCommonAncestor(root, p, q) {
    if (!root) {
        return null;
    }
    if (root.val === p || root.val === q) {
        return root;
    }

    let left = getLowestCommonAncestor(root.left, p, q);
    let right = getLowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    }

    return null;
}
