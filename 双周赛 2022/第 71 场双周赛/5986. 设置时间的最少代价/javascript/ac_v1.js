/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    let res = Number.MAX_SAFE_INTEGER;
    let minute = Math.floor(targetSeconds / 60);
    let second = targetSeconds % 60;
    const getTimeNumber = (m, s) => {
        let arr = [];
        let num = m * 100 + s;

        while (num) {
            arr.unshift(num % 10);
            num = Math.floor(num / 10);
        }
        
        return arr;
    };
    const getInputCost = (time) => {
        let cost = 0;
        let pre = startAt;
        const total = time.length;
        let index = 0;

        while (index < total) {
            if (time[index] !== pre) {
                cost += moveCost;
                pre = time[index];
            }
            cost += pushCost;
            index++;
        }

        return cost;
    };

    if (minute > 99) {
        res = Math.min(res, getInputCost(getTimeNumber(minute - 1, second + 60)));
    } else {
        res = Math.min(res, getInputCost(getTimeNumber(minute, second)));
        if (minute > 0 && second < 40) {
            res = Math.min(res, getInputCost(getTimeNumber(minute - 1, second + 60)));
        }
    }

    return res;
};
