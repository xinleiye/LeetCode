/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const arr = [...dominoes];
    const total = dominoes.length;
    let left = 0;
    let pre = "L";
    while (left < total) {
        let right = left;
        while (right < total && arr[right] === ".") {
            right++;
        }

        const cur = right < total ? arr[right] : "R";
        if (cur === pre) {
            while (left < right) {
                arr[left] = cur;
                left++;
            }
        } else if (cur === "L" && pre === "R") {
            let i = left;
            let j = right - 1;
            while (i < j) {
                arr[i] = "R";
                arr[j] = "L";
                i++;
                j--;
            }
        }
        pre = cur;
        left = right + 1;
    }

    return arr.join("");
};
