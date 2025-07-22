/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    let res = 0;
    const trainerNum = trainers.length;
    let index = 0;

    players.sort((p1, p2) => p1 - p2);
    trainers.sort((t1, t2) => t1 - t2);
    for (const p of players) {
        while (index < trainerNum && p > trainers[index]) {
            index++;
        }
        if (index < trainerNum) {
            res++;
            index++;
        }
    }

    return res;
};
