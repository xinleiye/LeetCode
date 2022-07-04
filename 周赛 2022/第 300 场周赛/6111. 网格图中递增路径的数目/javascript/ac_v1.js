/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function(nums, edges) {
    const treeMap = new Map();
    for (const [s, e] of edges) {
        if (treeMap.has(s)) {
            treeMap.get(s).push(e);
        } else {
            treeMap.set(s, [e]);
        }
        if (treeMap.has(e)) {
            treeMap.get(e).push(s);
        } else {
            treeMap.set(e, [s]);
        }
    }

    const total = nums.length;
    const inTime = new Array(total).fill(0);
    const outTime = new Array(total).fill(0);
    const xor = new Array(total).fill(0);
    let time = 0;
    const dfs = (node, father) => {
        time++;
        inTime[node] = time;
        xor[node] = nums[node];
        for (const n of treeMap.get(node)) {
            if (n !== father) {
                dfs(n, node);
                xor[node] ^= xor[n];
            }
        }
        outTime[node] = time;
    };
    dfs(0, -1);

    let res = Number.MAX_SAFE_INTEGER;
    // n1 是否为 n2 的祖先节点
    const isAncestor = (n1, n2) => {
        return inTime[n1] < inTime[n2] && outTime[n1] >= outTime[n2];
    };
    for (let i = 2; i < total; i++) {
        let xori = 0;
        let xorj = 0;
        let xor0 = 0;
        for (let j = 1; j < i; j++) {
            if (isAncestor(i, j)) {
                xorj = xor[j];
                xori = xor[i] ^ xorj;
                xor0 = xor[0] ^ xor[i];
            } else if (isAncestor(j, i)) {
                xori = xor[i];
                xorj = xor[j] ^ xori;
                xor0 = xor[0] ^ xor[j];
            } else {
                xori = xor[i];
                xorj = xor[j];
                xor0 = xor[0] ^ xori ^ xorj;
            }
            res = Math.min(res, Math.max(xori, xorj, xor0) - Math.min(xori, xorj, xor0));
            if (res === 0) {
                return 0;
            }
        }
    }
    return res;
};
