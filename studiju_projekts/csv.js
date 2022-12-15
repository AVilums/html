function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for (var i = 0; i < myArray.length; i++) {
        result += "<tr>";
        for (var j = 0; j < myArray[i].length; j++) {
            result += "<td>" + myArray[i][j] + "</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
}

function arrayToHTML() {
    var result = makeTableHTML(strukturasViss);
    document.write(result);
}

function stringTo2dArray(string, d1, d2) {
    return string.split(d1).map(function (x) { return x.split(d2) });
}
