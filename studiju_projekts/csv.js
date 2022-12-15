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
    var result = makeTableHTML(myArray);
    document.write(result);
}

function stringTo2dArray(string, d1, d2) {
    return string.split(d1).map(function (x) { return x.split(d2) });
}

function readFileAsText(file) {
    return new Promise(function (resolve, reject) {
        let fr = new FileReader();

        fr.onload = function () {
            resolve(fr.result);
        };

        fr.onerror = function () {
            reject(fr);
        };

        fr.readAsText(file);
    });
}

function forpush(b) {
    for (let i = 1; i < b.length; i++) {
        struktura.push(b[i][1]); //strukturu nosaukumi
        strukturaId.push(b[i][0]); //strukturu ID nosaukumi
    }
    myArray = b;
}