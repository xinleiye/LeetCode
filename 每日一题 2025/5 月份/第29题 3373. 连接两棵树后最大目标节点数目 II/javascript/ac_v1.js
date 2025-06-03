/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */

const COLOR1 = 0;
const COLOR2 = 1;
var maxTargetNodes = function(edges1, edges2) {
    const total1 = edges1.length + 1;
    const total2 = edges2.length + 1;
    const res = new Array(total1).fill(0);
    const colors1 = new Array(total1).fill(0);
    const colors2 = new Array(total2).fill(0);
    const map1 = new Map();
    const map2 = new Map();
    let color11 = 0, color12 = 0;
    let color21 = 0, max2Color = 0;

    genMap(map1, edges1);
    genMap(map2, edges2);
    color11 = dfsSearch(map1, 0 , -1, 0, colors1);
    color12 = total1 - color11;
    color21 = dfsSearch(map2, 0 , -1, 0, colors2);
    max2Color = Math.max(color21, total2 - color21);
    for (let i = 0; i < total1; i++) {
        if (colors1[i] === COLOR1) {
            res[i] = color11 + max2Color;
        } else {
            res[i] = color12 + max2Color;
        }
    }

    return res;
};

function genMap(map, edge) {
    for (const [s, e] of (edge)) {
        if (!map.has(s)) {
            map.set(s, []);
        }
        map.get(s).push(e);
        if (!map.has(e)) {
            map.set(e, []);
        }
        map.get(e).push(s);
    }
}

function dfsSearch(map, cur, parent, depth, color) {
    let count = 1 - depth % 2;
    const next = map.get(cur) || [];

    color[cur] = depth % 2 === 0 ? COLOR1 : COLOR2;
    for (const n of next) {
        if (n === parent) {
            continue;
        }
        count += dfsSearch(map, n, cur, depth + 1, color);
    }

    return count;
}
