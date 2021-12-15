/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function(richer, quiet) {
    const res = new Array(quiet.length).fill(-1);
    const total = quiet.length;
    const richerMap = new Map();

    richer.forEach(item => {
        if (richerMap.has(item[1])) {
            richerMap.get(item[1]).push(item[0]);
        } else {
            richerMap.set(item[1], [item[0]]);
        }
    });
    for (let i = 0; i < total; i++) {
        res[i] = i;
        if (richerMap.has(i)) {
            let quietI = quiet[i];
            const queue = [...richerMap.get(i)];

            while (queue.length) {
                const qItem = queue.shift();

                if (res[qItem] !== -1) {
                    if (quietI > quiet[res[qItem]]) {
                        quietI = quiet[res[qItem]];
                        res[i] = res[qItem];
                    }
                } else {
                    if (quietI > quiet[qItem]) {
                        quietI = quiet[qItem];
                        res[i] = qItem;
                    }
                    if (richerMap.has(qItem)) {
                        queue.push(...(richerMap.get(qItem)));
                    }
                }
            }
        }
    }

    return res;
};
