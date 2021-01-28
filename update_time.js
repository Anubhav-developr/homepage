// to pad hours and minutes to 2 digits
function pad(number) {
    return number <= 9 ? ("0"+number).slice(-2) : number;
}

function getMeridian(hours) {
    return hours > 12 ? "PM" : "AM";
}

function getGreeting(hours) {
    if (hours < 12) {
        return "Morning";
    } else if (hours < 16) {
        return "After Noon";
    } else if (hours < 20) {
        return "Evening";
    } else {
        return "Night";
    }
}

// to update time data
function updateTime() {
    var time = new Date();
    var data = new Array(pad(time.getHours()), pad(time.getMinutes()))
    var meridian = getMeridian(data[0]);
    var greeting = getGreeting(data[0]);

    data.push(meridian);
    data.push(greeting);

    postMessage(data);
    setTimeout("updateTime()", 5000);
}

updateTime();
