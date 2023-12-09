/**
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function(n) {
    let res = n + 1;
    const isBalanceNum = (num) => {
        const arr = new Array(10).fill(0);

        while (num) {
            arr[num % 10]++;
            num = Math.floor(num / 10);
        }
        if (arr[0]) {
            return false;
        }
        for (let i = 1; i < 10; i++) {
            if (arr[i] > 0 && (arr[i] !== i)) {
                return false;
            }
        }

        return true;
    };

    while (!isBalanceNum(res)) {
        res++;
    }

    return res;
};
