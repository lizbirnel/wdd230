function windChill() {
    let temp = parseFloat(document.getElementById("high").innerHTML);
    let speed = parseFloat(document.getElementById("windSpeed").innerHTML);
    let output = "N/A";
    if (temp<=50 && speed > 3) {
        output = wc(temp, speed);
    }



    document.getElementById("windChill").innerHTML = output;
}

function wc(t, s) {
    let windChill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    return windChill.toFixed()+"&#176F";
}

