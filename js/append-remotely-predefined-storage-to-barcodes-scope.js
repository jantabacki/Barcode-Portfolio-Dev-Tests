// Use Remote Storage Manager to append configuration
var remoteStorageManager = new RemoteStorageManager();
var barcodes = remoteStorageManager.getBarcodes();

// Load found groups to barcodes scope without duplicates.
for (var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    if (barcode["group"] !== "" && barcode["group"] !== undefined && !barcodeScope.groups.includes(barcode["group"])) {
        barcodeScope.groups.push(barcode["group"]);
    }
}

// Append all predefined barcodes to barcodes scope
for (var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    barcodeScope.barcodes.push(barcode);
}