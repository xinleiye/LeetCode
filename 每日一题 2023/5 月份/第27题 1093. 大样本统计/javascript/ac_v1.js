/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function(count) {
    const MAX = 256;
    let min = 0;
    for (let i = 0; i < MAX; i++) {
        if (count[i]) {
            min = i;
            break;
        }
    }

    let max = 0;
    for (let i = MAX - 1; i >= 0; i--) {
        if (count[i]) {
            max = i;
            break;
        }
    }

    let sum = 0;
    let mean = 0;
    let total = 0;
    let maxCount = 0;
    let mode = 0;
    for (let i = 0; i < MAX; i++) {
        sum += count[i] * i;
        total += count[i];
        if (count[i] > maxCount) {
            mode = i;
            maxCount = count[i];
        }
    }
    mean = sum / total;

    let curCount = 0;
    const halfCount = Math.ceil(total / 2);
    let median = 0;
    for (let i = 0; i < MAX; i++) {
        curCount += count[i];
        if (curCount > halfCount) {
            median = i;
            break;
        } else if (curCount === halfCount) {
            if (total % 2) {
                median = i;
            } else {
                for (let j = i + 1; j < MAX; j++) {
                    if (count[j]) {
                        median = (i + j) / 2;
                        break;
                    }
                }
            }
            break;
        }
    }

    return [min, max, mean, median, mode];
};
