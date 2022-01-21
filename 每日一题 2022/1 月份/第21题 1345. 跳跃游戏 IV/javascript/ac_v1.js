/**
 * @param {number[]} arr
 * @return {number}
 */
 var minJumps = function(arr) {
    const total = arr.length;
    const sameValueIndexMap = new Map();
    const visitedSet = new Set();
    const queue = [];

    arr.forEach((val, index) => {
        if (sameValueIndexMap.has(val)) {
            sameValueIndexMap.get(val).push(index);
        } else {
            sameValueIndexMap.set(val, [index]);
        }
    });
    queue.push([0, 0]);
    visitedSet.add(0);
    while (queue.length) {
        let [index, step] = queue.shift();

        if (index === total - 1) {
            return step;
        }

        const val = arr[index];

        step++;
        if (sameValueIndexMap.has(val)) {
            const indexs = sameValueIndexMap.get(val);

            for (let i of indexs) {
                if (!visitedSet.has(i)) {
                    visitedSet.add(i);
                    queue.push([i, step]);
                }
            }
            sameValueIndexMap.delete(val);
        }
        if (index + 1 < total && !visitedSet.has(index + 1)) {
            queue.push([index + 1, step]);
            visitedSet.add(index + 1);
        }
        if (index - 1 >= 0 && !visitedSet.has(index - 1)) {
            queue.push([index - 1, step]);
            visitedSet.add(index - 1);
        }
    }

    return -1;
};
