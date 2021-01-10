/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    let s1Arr = s1.split("");
    let s2Arr = s2.split("");
    let difCount = 0;
    let sameCount = 0;
    
    s1Arr.sort();
    s2Arr.sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1Arr[i] > s2Arr[i]) {
            difCount++;
        } else if (s1Arr[i] === s2Arr[i]) {
            sameCount++;
        } else {
            difCount--;
        }
    }

    return (Math.abs(difCount) + sameCount) === s1.length;
};
