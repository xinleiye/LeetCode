/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let res;
    let maxTime = 0;
    let charTime = new Array(26).fill(0);

    charTime[keysPressed.charCodeAt(0) - 97] = releaseTimes[0];
    for (let i = 1; i < keysPressed.length; i++) {
        let charCode = keysPressed.charCodeAt(i) - 97;

        charTime[charCode] = Math.max(charTime[charCode], releaseTimes[i] - releaseTimes[i - 1]);
    }

    for (let i = charTime.length - 1; i >= 0; i--) {
        if (charTime[i] > maxTime) {
            maxTime = charTime[i];
            res = String.fromCharCode(i + 97);
        }
    }

    return res;
};
