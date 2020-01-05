/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
    let res = [];
    let visited = (new Array(friends.length)).fill(0);
    let friendList = [];
    let video = {};
    let videos = {};

    visited[id] = 1;
    friendList.push(id);
    for (let i = 0; i < level; i++) {
        for (let j = 0, len = friendList.length; j < len; j++) {
            let aId = friendList.shift();

            for (let item of friends[aId]) {
                if (visited[item] === 0) {
                    friendList.push(item);
                    visited[item] = 1;
                }
            }
        }
    }

    for (let i = 0, len = friendList.length; i < len; i++) {
        for(let item of watchedVideos[friendList[i]]) {
            if (video[item]) {
                video[item]++;
            } else {
                video[item] = 1;
            }
        }
    }

    for (let key in video) {
        if (videos[video[key]]) {
            videos[video[key]].push(key);
        } else {
            videos[video[key]] = [key];
        }
    }
    
    for (let key in videos) {
        videos[key].sort();
    }

    Object.keys(videos).sort((val1, val2) => {
        return Number(val1) - Number(val2);
    }).forEach(item => {
        res.push(...videos[item]);
    });

    return res;
};
