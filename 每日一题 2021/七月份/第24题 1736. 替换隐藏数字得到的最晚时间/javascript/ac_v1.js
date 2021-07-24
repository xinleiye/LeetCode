/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let hour;
    let minite;
    const times = time.split(":");
    
    if (times[0][0] === "?") {
        if (times[0][1] === "?") {
            hour = "23";
        } else {
            if (times[0][1] <= "3") {
                hour = `2${times[0][1]}`;
            } else {
                hour = `1${times[0][1]}`;
            }
        }
    } else {
        if (times[0][1] !== "?") {
            hour = times[0];
        } else {
            if (times[0][0] <= "1") {
                hour = `${times[0][0]}9`;
            } else {
                hour = "23"
            }
        }
    }
    if (times[1][0] === "?") {
        if (times[1][1] === "?") {
            minite = "59";
        } else {
            minite = `5${times[1][1]}`;
        }
    } else {
        if (times[1][1] !== "?") {
            minite = times[1];
        } else {
            minite = `${times[1][0]}9`;
        }
    }
    
    return `${hour}:${minite}`;
};
