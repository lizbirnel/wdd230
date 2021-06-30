let daysAbbr = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

let day = new Date();
let day1 = daysAbbr[(day.getDay() + 1) % 7];
let day2 = daysAbbr[(day.getDay() + 2) % 7];
let day3 = daysAbbr[(day.getDay() + 3) % 7];
let day4 = daysAbbr[(day.getDay() + 4) % 7];
let day5 = daysAbbr[(day.getDay() + 5) % 7];

document.getElementById("day1").innerHTML = day1;
document.getElementById("day2").innerHTML = day2;
document.getElementById("day3").innerHTML = day3;
