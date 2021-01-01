/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let openedRoom = new Set();
    let roomQueue = [];

    roomQueue.push(0);
    while (roomQueue.length) {
        let currentKey = roomQueue.shift();
        let keys = rooms[currentKey];

        if (!openedRoom.has(currentKey)) {
            openedRoom.add(currentKey);
            for (let j = 0; j < keys.length; j++) {
                roomQueue.push(keys[j]);
            }
        }
    }

    return openedRoom.size === rooms.length;
};
