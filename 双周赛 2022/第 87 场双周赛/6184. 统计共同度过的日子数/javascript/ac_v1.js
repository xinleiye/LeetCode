/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    if (arriveAlice > leaveBob || leaveAlice < arriveBob) {
        return 0;
    }

    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arriveTime = arriveAlice > arriveBob ? arriveAlice : arriveBob;
    const leaveTime = leaveAlice < leaveBob ? leaveAlice : leaveBob;
    const [am, ad] = arriveTime.split("-").map(item => Number(item));
    const [lm, ld] = leaveTime.split("-").map(item => Number(item));

    let ads = 0;
    for (let i = 1; i < am; i++) {
        ads += days[i];
    }
    ads += ad;

    let lds = 0;
    for (let i = 1; i < lm; i++) {
        lds += days[i];
    }
    lds += ld;

    return lds - ads + 1;
};
