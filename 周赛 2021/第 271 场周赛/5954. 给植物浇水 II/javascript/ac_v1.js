/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
    let res = 0;
    let capA = capacityA;
    let capB = capacityB;
    let indexA = 0;
    let indexB = plants.length - 1;

    while (indexA <= indexB) {
        if (indexA !== indexB) {
            if (capA >= plants[indexA]) {
                capA -= plants[indexA];
            } else {
                capA = capacityA - plants[indexA];
                res++;
            }
            if (capB >= plants[indexB]) {
                capB -= plants[indexB];
            } else {
                capB = capacityB - plants[indexB];
                res++;
            }
        } else {
            if (capA >= capB) {
                if (capA < plants[indexA]) {
                    res++;
                }
            } else {
                if (capB < plants[indexB]) {
                    res++;
                }
            }
        }
        indexA++;
        indexB--;
    }

    return res;
};
