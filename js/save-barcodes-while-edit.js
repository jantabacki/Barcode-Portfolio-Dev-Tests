function saveBarcodes() {
    var storageManager = new StorageManager();
    var barcodes = storageManager.getBarcodes();
    for (var i = 0; i < barcodes.length; i++) {
        var barcode = barcodes[i];
        barcode["name"] = document.getElementById("barcode-name-" + barcode["id"]).value;
        barcode["group"] = document.getElementById("barcode-group-" + barcode["id"]).value;
        barcode["code"] = document.getElementById("barcode-code-" + barcode["id"]).value;
        barcode["type"] = document.getElementById("barcode-type-" + barcode["id"]).value;
    }
    storageManager.updateStorage(barcodes);
    refresh();
}