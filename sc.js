function klikDiv() {
    alert("kliknieto na diva");
}
function klikGuzik() {
    alert("kliknieto na przycisk");
}
function main () {
    document.getElementById("buton").style.backgroundColor = "black";
    document.getElementById("buton").style.color = "white";
    var div = document.createElement("div");
    var button = document.createElement("button");
    div.appendChild(button);
    button.innerHTML = "przycisk";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.textAlign = "center";
    div.style.backgroundColor = "yellow";
    button.style.marginTop = "50%";
    document.getElementById("body").appendChild(div);
    div.addEventListener("click", klikDiv());
    button.addEventListener("click", klikGuzik());
}
function onHover() {
    document.getElementById("buton").style.backgroundColor = "yellow";
    document.getElementById("buton").style.color = "black";
}

function licznik() {
    var iloscznakow = 200-parseInt(document.getElementById("tekstpole").value.length);
    document.getElementById("akapit").innerHTML = "zostalo ci "+iloscznakow;
    document.getElementById("akapit").innerHTML += "\nwpisano "+(200-iloscznakow);
}
function kodpocztowywal() {
    var pole = document.getElementById("kod");
    try {
        if (pole.value.charAt(2)!='-' || !isNaN(pole.value.charAt(0)) || !isNaN(pole.value.charAt(1)) || !isNaN(pole.charAt(3)) || !isNaN(pole.value.charAt(4)) || !isNaN(pole.value.charAt(5)))
        {
            throw new Error("nieprawidlowy format");

        }
    }
    catch (err) {
        alert("Przechwycono blad: " + err);
    }
}
function sprawdz() {
    if (document.getElementById("kod").value.length==6) {
        kodpocztowywal();
    }
}
