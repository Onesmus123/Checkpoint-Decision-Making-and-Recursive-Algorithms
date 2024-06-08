function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) { 
            if (year % 400 === 0) { 
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let year = parseInt(prompt("Enter a year: "));
if (leapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
