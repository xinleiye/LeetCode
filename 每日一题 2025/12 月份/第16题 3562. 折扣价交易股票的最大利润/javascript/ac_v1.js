/**
 * @param {number} n
 * @param {number[]} present
 * @param {number[]} future
 * @param {number[][]} hierarchy
 * @param {number} budget
 * @return {number}
 */
var maxProfit = function(n, present, future, hierarchy, budget) {
    const map = Array.from({ length: n }, () => []);
    // 0 买；1 不买。
    const dfsSearch = (cur, map, present, future, budget) => {
        const profitCurNext = Array.from({ length: budget + 1 }, () => new Array(2).fill(0));
        for (const next of map[cur]) {
            const profitNext = dfsSearch(next, map, present, future, budget);
            for (let b = budget; b >= 0; b--) {
                for (let pb = 0; pb <= b; pb++) {
                    profitCurNext[b][0] = Math.max(profitCurNext[b][0], profitCurNext[b - pb][0] + profitNext[pb][0]);
                    profitCurNext[b][1] = Math.max(profitCurNext[b][1], profitCurNext[b - pb][1] + profitNext[pb][1]);
                }
            }
        }

        const profitCur = Array.from({ length: budget + 1 }, () => new Array(2).fill(0));
        for (let b = 0; b <= budget; b++) {
            let cost = present[cur];
            if (b >= cost) {
                profitCur[b][0] = Math.max(profitCurNext[b][0], profitCurNext[b - cost][1] + future[cur] - cost);
            } else {
                profitCur[b][0] = profitCurNext[b][0];
            }

            cost = cost >>> 1;
            if (b >= cost) {
                profitCur[b][1] = Math.max(profitCurNext[b][0], profitCurNext[b - cost][1] + future[cur] - cost);
            } else {
                profitCur[b][1] = profitCurNext[b][0];
            }
        }

        return profitCur;
    };

    for (const [s, e] of hierarchy) {
        map[s - 1].push(e - 1);
    }

    return dfsSearch(0, map, present, future, budget)[budget][0];
};
