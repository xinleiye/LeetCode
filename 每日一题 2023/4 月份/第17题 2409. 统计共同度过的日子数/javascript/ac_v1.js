/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    if (leaveAlice < arriveBob || arriveAlice > leaveBob) {
        return 0;
    }
    return calcDays(arriveAlice < arriveBob ? arriveBob : arriveAlice, leaveAlice < leaveBob ? leaveAlice : leaveBob);
};

function parseTime(date) {
    return date.split("-").map(v => Number(v));
}

function calcDays (start, end) {
    const [m1, d1] = parseTime(start)
    const [m2, d2] = parseTime(end);
    if (m1 === m2) {
        return d2 - d1 + 1;
    }

    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = days[m1] - d1 + 1 + d2;
    for (let i = m1 + 1; i < m2; i++) {
        day += days[i];
    }

    return day;
}
