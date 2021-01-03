/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function(apples, days) {
    let res = 0;
    let date = 1;
    const length = apples.length;
    const applesBuff = [];

    for (let i = 0; i < length; i++) {
        if (apples[i] > 0) {
            applesBuff.push([i + 1 + days[i], apples[i], i + 1]);
        }
    }

    applesBuff.sort((val1, val2) => {
        if (val1[0] === val2[0]) {
            return val1[2] - val2[2];
        } else {
            return val1[0] - val2[0];
        }
    });


    while (apples[date - 1] === 0) {
        date++;
    }

    while (applesBuff.length > 0) {
        if (date < applesBuff[0][0]) {
            res++;
            applesBuff[0][1]--;
            if (applesBuff[0][1] === 0) {
                applesBuff.shift();
            }
        }
        date++;
        while (applesBuff.length > 0 && date >= applesBuff[0][0]) {
            applesBuff.shift();
        }
    }

    return res;
};
