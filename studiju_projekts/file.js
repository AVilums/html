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

function checkFileAmount(myArray, count) {
    if(myArray.length != count){
        alert("Nav izvēlēti " + count + " faili");
        window.open("pievienotp.html", "_self");
    }
}

function compareThreeFiles(viens,divi,tris) {
        
    if (viens[0][0]=="Am.ID" && divi[0][0]=="Str.ID" && tris[0][0]=="ID") {
        forpush(viens,divi,tris); 
    }else if (viens[0][0]=="Str.ID" && divi[0][0]=="Am.ID" && tris[0][0]=="ID"){
        forpush(divi,viens,tris);
    }else if (viens[0][0]=="ID" && divi[0][0]=="Str.ID" && tris[0][0]=="Am.ID"){
        forpush(tris,divi,viens);
    }else if (viens[0][0]=="ID" && divi[0][0]=="Am.ID" && tris[0][0]=="Str.ID"){
        forpush(divi,tris,viens);
    }else if (viens[0][0]=="Am.ID" && divi[0][0]=="ID" && tris[0][0]=="Str.ID"){
        forpush(viens,tris,divi);
    }else if (viens[0][0]=="Str.ID" && divi[0][0]=="ID" && tris[0][0]=="Am.ID"){
        forpush(tris,viens,divi);
    }else { 
        alert("Izvēlēti nepareizi faili");
        window.open("pievienotp.html", "_self");
    }
}