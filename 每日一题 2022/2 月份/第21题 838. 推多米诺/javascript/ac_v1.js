/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const res = new Array(dominoes.length).fill(".");
    const queue = [];
    const total = dominoes.length;
    const timer = new Array(dominoes.length).fill(-1);
    const strength = new Array(dominoes.length);

    for (let i = 0; i < total; i++) {
        strength[i] = [];
        if (dominoes[i] !== ".") {
            queue.push(i);
            timer[i] = 0;
            strength[i].push(dominoes[i]);
        }
    }

    while (queue.length) {
        const index = queue.shift();

        if (strength[index].length === 1) {
            const s = strength[index][0];
            const nextIndex = s === "R" ? index + 1 : index - 1;

            res[index] = s;
            if (nextIndex >= 0 && nextIndex < total) {
                const t = timer[index];

                if (timer[nextIndex] === -1) {
                    queue.push(nextIndex);
                    timer[nextIndex] = t + 1;
                    strength[nextIndex].push(s);
                } else if (timer[nextIndex] === t + 1) {
                    strength[nextIndex].push(s);
                }
            }
        }
    }

    return res.join("");
};
