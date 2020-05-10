/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let res = 0;
    let xorArr = [];
    
    xorArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        xorArr[i] = arr[i] ^ xorArr[i - 1];
    }

    for (let i = 1; i < arr.length; i++) {
        for (let k = i - 1; k >= 0; k--) {
            let numA;
            
            if (k - 1 >= 0) {
                numA = xorArr[i - 1] ^ xorArr[k - 1];
            } else {
                numA = xorArr[i - 1];
            }

            for (let j = i; j < arr.length; j++) {
                let numB = xorArr[i - 1] ^ xorArr[j];

                if (numA === numB) {
                    res++;
                }
            }
        }
    }

    return res;
};
