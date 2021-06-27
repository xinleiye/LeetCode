/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {
    let res = 0;
    const formatStartMinite = (mm) => {
        let mm1 = parseInt(mm, 10);
        
        if (mm1 === 0) {
            return 0;
        } else if (mm1 > 0 && mm1 <= 15) {
            return 15;
        } else if (mm1 > 15 && mm1 <= 30) {
            return 30;
        } else if (mm1 > 30 && mm1 <= 45) {
            return 45;
        } else {
            return 60;
        }
    };
    const formatfinistMinite = (mm) => {
        let mm1 = parseInt(mm, 10);
        
        if (mm1 >= 0 && mm1 < 15) {
            return 0;
        } else if (mm1 >= 15 && mm1 < 30) {
            return 15;
        } else if (mm1 >= 30 && mm1 < 45) {
            return 30;
        } else {
            return 45;
        }
    };
    const getRound = (st, et) => {
        let count = 0;
        let sh = parseInt(st[0], 10);
        let sm = formatStartMinite(st[1]);
        let eh = parseInt(et[0], 10);
        let em = parseInt(et[1], 10);

        if (eh === sh && (em - sm) < 15) {
            return 0;
        }
        if (sm === 60) {
            sh++;
            sm = 0;
        }
        count += (eh - sh) * 4;
        count += (formatfinistMinite(em) - sm) / 15;
        
        return count;
    };

    if (startTime < finishTime) {
        res = getRound(startTime.split(":"), finishTime.split(":"));
    } else {
        res = getRound(startTime.split(":"), [24, 00]) + getRound([00, 00], finishTime.split(":"));
    }

    return res;
};
