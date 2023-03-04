var barcodes = PredefinedConfiguration.barcodes;
var groups = [];

for (var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    if (barcode["group"] !== "" && barcode["group"] !== undefined && !groups.includes(barcode["group"])) {
        groups.push(barcode["group"]);
    }
}

for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    document.getElementById("navigation").innerHTML += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + group + '</a><div id="' + 'group-' + group + '" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"></div></li>'
}

for (var i = 0; i < barcodes.length; i++) {
    var barcode = PredefinedConfiguration.barcodes[i];
    if (barcode["group"] === "" || barcode["group"] === undefined) {
        document.getElementById("navigation").innerHTML += '<a class="nav-item nav-link" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>'
    } else {
        document.getElementById("group-" + barcode["group"]).innerHTML += '<a class="dropdown-item" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>';
    }
}