// Draw all directories added to barcodes scope
for (var i = 0; i < barcodeScope.groups.length; i++) {
    var group = barcodeScope.groups[i];
    document.getElementById("navigation").innerHTML += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + group + '</a><div id="' + 'group-' + group + '" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"></div></li>'
}

// Draw all barcodes added to barcodes scope
for (var i = 0; i < barcodeScope.barcodes.length; i++) {
    var barcode = barcodeScope.barcodes[i];
    if (barcode["group"] === "" || barcode["group"] === undefined) {
        document.getElementById("navigation").innerHTML += '<a class="nav-item nav-link" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>'
    } else {
        document.getElementById("group-" + barcode["group"]).innerHTML += '<a class="dropdown-item" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>';
    }
}