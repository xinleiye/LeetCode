/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    let weightMap = new Map();
    let weightArr = new Array(hi - lo + 1).fill(0);
    let getWeight = (num) => {
        let weight = 0;

        while(num > 1) {
            if (num % 2 === 1) {
                num = 3 * num + 1;
            } else {
                num = num / 2;
            }
            weight++;
        }
        return weight;
    };
    let calcKth = (weightMap, k) => {
        let count = 0;
        let weightNumArr = weightMap.get(weightArr[k - 1]);

        weightMap.forEach((val, key) => {
            if (key < weightArr[k - 1]) {
                count += val.length;
            }
        });

        for (let i = 0, len = weightNumArr.length; i < len; i++) {
            count++;
            if (count === k) {
                return weightNumArr[i];
            }
        }
    };

    for (let i = lo; i <= hi; i++) {
        let weight = getWeight(i);

        weightArr[i - lo] = weight;
        if (weightMap.has(weight)) {
            weightMap.get(weight).push(i);
        } else {
            weightMap.set(weight, [i]);
        }
    }

    weightArr.sort((val1, val2) => {
        return val1 - val2;
    });

    return calcKth(weightMap, k);
};
