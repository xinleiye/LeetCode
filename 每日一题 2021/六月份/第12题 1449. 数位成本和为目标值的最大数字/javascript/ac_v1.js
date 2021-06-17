/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    let costMap = new Map();
    let compare = (num1, num2) => {
        if (num1.length > num2.length) {
            return true;
        } else if (num1.length < num2.length) {
            return false;
        } else {
            return num1 > num2;
        }
    };

    costMap.set(0, "");
    for (let i = 1; i <= target; i++) {
        let newNum = "";

        costMap.forEach((val, key) => {
            let restCost = i - key;

            for (let j = 8; j >= 0; j--) {
                if (cost[j] === restCost) {
                    if (compare((j + 1) + val, newNum)) {
                        newNum = (j + 1) + val;
                    }
                    if (compare(val + (j + 1), newNum)) {
                        newNum = val + (j + 1);
                    }
                    break;
                }
            }
        });
        if (newNum) {
            costMap.set(i, newNum);
        }
    }

    return costMap.has(target) ? costMap.get(target) : "0";
};
