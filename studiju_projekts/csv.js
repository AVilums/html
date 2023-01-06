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

function forpush(b) {
    for (let i = 1; i < b.length; i++) {
        struktura.push(b[i][1]); //strukturu nosaukumi
        strukturaId.push(b[i][0]); //strukturu ID nosaukumi
    }
    myArray = b;

    return myArray;
}

function compareToStrukturvieniba(viens) {
    if (viens[0][0] == "Str.ID") {
        strukturasViss = forpush(viens);
    } else {
        alert("Izvēlēts nepareizais fails");
        window.open("pievienot_strukturu.html", "_self");
    }
}

function compareToPersonals(viens) {
    if (viens[0][0] == "ID") {
        personalsViss = forpush(viens);
    } else {
        alert("Izvēlēts nepareizais fails");
        window.open("pievienot_strukturu.html", "_self");
    }
}

function compareToAmati(viens) {
    if (viens[0][0] == "Am.ID") {
        amatiViss = forpush(viens);
    } else {
        alert("Izvēlēts nepareizais fails");
        window.open("pievienots.html", "_self");
    }
}

function translateStrukturvieniba(string) {
    if (string == "") {
        string = "";
    } else {
        for (let j = 0; j < strukturasViss.length; j++) {
            if (string == undefined) { break; }
            if (string.trim() == strukturasViss[j][0].trim()) {
                string = strukturasViss[j][1].trim();
                break;
            }
        }
    }
    return string;
}

function translateAmati(string) {
    if (string == "") {
        string = "";
    } else {
        for (let j = 0; j < amatiViss.length; j++) {
            if (string == undefined) { break; }
            if (string.trim() == amatiViss[j][0].trim()) {
                string = amatiViss[j][1].trim();
                break;
            }
        }
    }
    return string;
}

function datuAizsardziba(string) {
    if(string == undefined) { return }

    if(string.trim() == "n") { return false;
    } else { return true; }
}  