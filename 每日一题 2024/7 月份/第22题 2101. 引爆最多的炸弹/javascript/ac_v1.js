/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    const total = bombs.length;
    const map = new Map();
    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
            if (i !== j && isDetonate(bombs[i], bombs[j])) {
                if (!map.has(i)) {
                    map.set(i, []);
                }
                map.get(i).push(j);
            }
        }
    }

    let res = 0;
    for (let i = 0; i < total; i++) {
        const visited = new Array(total).fill(false);
        let count = 1;
        const queue = [i];
        visited[i] = true;
        while (queue.length) {
            const cur = queue.shift();
            const next = map.get(cur) || [];
            for (const n of next) {
                if (visited[n]) {
                    continue;
                }
                count++;
                queue.push(n);
                visited[n] = true;
            }
        }
        res = Math.max(res, count);
    }

    return res;
};

function isDetonate([x1, y1, r1], [x2, y2, r2]) {
    return r1 * r1 >= Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}
