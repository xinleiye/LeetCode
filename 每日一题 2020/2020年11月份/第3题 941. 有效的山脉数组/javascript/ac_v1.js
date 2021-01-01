/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    let maxIndex = 0;

    if (A.length < 3) {
        return false;
    }

    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            continue;
        } else if (A[i] === A[i - 1]) {
            return false;
        } else {
            maxIndex = i - 1;
            break;
        }
    }

    if (maxIndex === 0) {
        return false;
    }

    for (let i = maxIndex + 1; i < A.length; i++) {
        if (A[i] >= A[i - 1]) {
            return false;
        }
    }

    return true;
};
