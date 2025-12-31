/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
    const groups = Array.from({ length: 7 }, () => new Array(7));
    for (const row of groups) {
        for (let i = 0; i < 7; i++) {
            row[i] = [];
        }
    }
    for (const str of allowed) {
        groups[str.charCodeAt(0) - 64][str.charCodeAt(1) - 64].push(str.charCodeAt(2) - 64);
    }

    const length = bottom.length;
    const pyramid = new Array(length);
    for (let i = 0; i < length; i++) {
        pyramid[length - 1] |= (bottom.charCodeAt(i) - 64) << (i * 3);
    }

    const visited = new Array(1 << (length - 1) * 3).fill(false);
    const dfsSearch = (i, j, pyramid, visited, groups) => {
        if (i < 0) {
            return true;
        }
        if (visited[pyramid[i]]) {
            return false;
        }
        if (j === i + 1) {
            visited[pyramid[i]] = true;

            return dfsSearch(i - 1, 0, pyramid, visited, groups);
        }

        const next = groups[pyramid[i + 1] >> (j * 3) & 7][pyramid[i + 1] >> ((j + 1) * 3) & 7];
        for (const n of next) {
            pyramid[i] &= ~(7 << (j * 3));
            pyramid[i] |= n << (j * 3);
            if (dfsSearch(i, j + 1, pyramid, visited, groups)) {
                return true;
            }
        }

        return false;
    };

    return dfsSearch(length - 2, 0, pyramid, visited, groups);
};
