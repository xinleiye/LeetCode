function Tweet (userId, tweetId, date) {
    this.tweetId = tweetId;
    this.userId = userId;
    this.date = date;
}

function UserInfo (userId) {
    this.userId = userId;
    this.followerIds = new Set();
    this.followeeIds = new Set();
    this.myTweets = [];
    this.lastTweets = [];
}

function updateUserLastTweets (map, userId, tweet) {
    let userInfo = map.get(userId);

    if (userInfo.lastTweets.length >= 10) {
        userInfo.lastTweets.pop();
    }
    userInfo.lastTweets.unshift(tweet);
}
/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.date = 0;
    this.userMap = new Map();
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let tweet = new Tweet(userId, tweetId, this.date++);

    if (this.userMap.has(userId)) {
        let userInfo = this.userMap.get(userId);

        userInfo.myTweets.push(tweet);
        userInfo.followerIds.forEach((key) => {
            updateUserLastTweets(this.userMap, key, tweet);
        });
    } else {
        let newUser = new UserInfo(userId);

        newUser.myTweets.push(tweet);
        this.userMap.set(userId, newUser);
    }
    updateUserLastTweets(this.userMap, userId, tweet);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if (this.userMap.has(userId)) {
        return this.userMap.get(userId).lastTweets.map(tweet => {
            return tweet.tweetId;
        });
    } else {
        return [];
    }
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    let tweets = [];
    let userInfo;

    if (followerId === followeeId) {
        return;
    }

    if (!this.userMap.has(followerId)) {
        userInfo = new UserInfo(followerId);
        this.userMap.set(followerId, userInfo);
    } else {
        userInfo = this.userMap.get(followerId);
    }

    if (userInfo.followeeIds.has(followeeId)) {
        return;
    }

    userInfo.followeeIds.add(followeeId);
    if (!this.userMap.has(followeeId)) {
        this.userMap.set(followeeId, new UserInfo(followeeId));
    } else {
        userInfo.lastTweets = userInfo.lastTweets.concat(this.userMap.get(followeeId).myTweets.slice(-10)).sort((tweet1, tweet2) => {
            return tweet2.date - tweet1.date;
        }).slice(0, 10);
    }
    // console.log(userInfo.lastTweets);
    // console.log(this.userMap.get(followeeId).myTweets);
    // console.log(userInfo.lastTweets.concat(this.userMap.get(followeeId).myTweets.slice(-10)).sort((tweet1, tweet2) => {
    //         return tweet2.date - tweet1.date;
    //     }));
    // console.log(userInfo.lastTweets.concat(this.userMap.get(followeeId).myTweets.slice(-10)).sort((tweet1, tweet2) => {
    //         return tweet2.date - tweet1.date;
    //     }).slice(0, 10));
    this.userMap.get(followeeId).followerIds.add(followerId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let tweets = [];
    let userInfo;

    if (followerId === followeeId) {
        return;
    }
    if (!this.userMap.has(followeeId)) {
        return;
    }
    if (!this.userMap.has(followerId)) {
        return;
    } else {
        userInfo = this.userMap.get(followerId);
    }

    userInfo.followeeIds.delete(followeeId);

    userInfo.followeeIds.forEach(val => {
        tweets = tweets.concat(this.userMap.get(val).myTweets.slice(-10));
    });
    tweets = tweets.concat(userInfo.myTweets);
    userInfo.lastTweets = tweets.sort((tweet1, tweet2) => {
        return tweet2.date - tweet1.date;
    }).slice(0, 10);

    this.userMap.get(followeeId).followerIds.delete(followerId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */