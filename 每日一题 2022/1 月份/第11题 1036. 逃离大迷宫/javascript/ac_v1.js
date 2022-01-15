/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
    if (blocked.length < 2) {
        return true;
    }
    const MAX = 1e6;
    const maxValidPos = blocked.length * (blocked.length - 1) / 2;
    const blockSet = new Set();
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const getPositionFlag = (x, y) => `${x}, ${y}`;
    const dfsSearch = (src, tar, steps) => {
        let [tx, ty] = tar;
        const queue = [src];
        const visitedSet = new Set();

        visitedSet.add(getPositionFlag(src[0], src[1]));
        while (queue.length && steps > 0) {
            const [x, y] = queue.shift();

            for (let dir of directions) {
                const nextX = x + dir[0];
                const nextY = y + dir[1];
                const flag = getPositionFlag(nextX, nextY);

                if (nextX === tx && nextY === ty) {
                    return FOUND;
                }
                if (nextX >= 0 && nextX < MAX && nextY >= 0 && nextY < MAX &&
                    !visitedSet.has(flag) && !blockSet.has(flag)) {
                    queue.push([nextX, nextY]);
                    steps--;
                    visitedSet.add(flag);
                }
            }
        }

        return steps > 0 ? BLOCK : VALID;
    };

    blocked.forEach(block => {
        blockSet.add(getPositionFlag(block[0], block[1]));
    });

    const FOUND = 0;
    const VALID = 1;
    const BLOCK = -1;
    const res = dfsSearch(source, target, maxValidPos);

    if (res === FOUND) {
        return true;
    } else if (res === BLOCK) {
        return false;
    } else {
        return dfsSearch(target, source, maxValidPos) !== BLOCK;
    }
};
