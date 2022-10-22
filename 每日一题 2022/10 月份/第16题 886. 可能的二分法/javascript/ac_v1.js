/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const map = new Map();
    const add2Map = (map, n1, n2) => {
        if (map.has(n1)) {
            map.get(n1).push(n2);
        } else {
            map.set(n1, [n2]);
        }
    };
    for (const [n1, n2] of dislikes) {
        add2Map(map, n1, n2);
        add2Map(map, n2, n1);
    }

    const group = new Array(n + 1).fill(0);
    const dfsSearch = (map, color, node, curColor) => {
        const next = map.get(node);
        color[node] = curColor;
        if (next) {
            for (const n of next) {
                if (color[n] !== 0 && color[n] === curColor) {
                    return false;
                }
                if (color[n] === 0 && !dfsSearch(map, color, n, curColor === 1 ? 2 : 1)) {
                    return false;
                }
            }
        }

        return true;
    };
    for (let i = 1; i <= n; i++) {
        if (group[i] === 0 && !dfsSearch(map, group, i, 1)) {
            return false;
        }
    }

    return true;
};
