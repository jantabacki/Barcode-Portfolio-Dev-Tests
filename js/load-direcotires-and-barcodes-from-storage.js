var predefinedBarcodes = PredefinedConfiguration.barcodes;
var predefinedGroups = [];
var storageManager = new StorageManager();
var barcodes = storageManager.getBarcodes();
var groups = [];

//load predefined groups without duplicates from predefined configuration
for (var i = 0; i < predefinedBarcodes.length; i++) {
    var barcode = predefinedBarcodes[i];
    if (barcode["group"] !== "" && barcode["group"] !== undefined && !groups.includes(barcode["group"])) {
        predefinedGroups.push(barcode["group"]);
    }
    groups = predefinedGroups.slice();
}

//load groups created by user from storage without duplicates
if (barcodes !== undefined && barcodes !== null) {
    for (var i = 0; i < barcodes.length; i++) {
        var barcode = barcodes[i];
        if (barcode["group"] !== "" && barcode["group"] !== undefined && !groups.includes(barcode["group"])) {
            groups.push(barcode["group"]);
        }
    }
}

//create HTML entries in navgiation only for groups created by user which were not in predefined groups.
if (groups !== []) {
    for (var i = 0; i < groups.length; i++) {
        var group = groups[i];
        if (!predefinedGroups.includes(group)) {
            document.getElementById("navigation").innerHTML += '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + group + '</a><div id="' + 'group-' + group + '" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"></div></li>';
        }
    }
}

//insert barcode entries created by user in navigation. 
if (barcodes !== undefined && barcodes !== null) {
    for (var i = 0; i < barcodes.length; i++) {
        var barcode = barcodes[i];
        if (barcode["group"] === "" || barcode["group"] === undefined) {
            document.getElementById("navigation").innerHTML += '<a class="nav-item nav-link" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>';
        } else {
            document.getElementById("group-" + barcode["group"]).innerHTML += '<a class="dropdown-item" onclick=\'barcodeClicked("' + barcode["id"] + '")\'>' + barcode["name"] + '</a>';
        }
    }
}