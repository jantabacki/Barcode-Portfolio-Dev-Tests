function deleteBarcode(barcodeId) {
    if (confirm("Are you sure you want to delete a barcode?")) {
        var storageManager = new StorageManager();
        var barcodes = storageManager.getBarcodes();
        for (var i = 0; i < barcodes.length; i++) {
            if (barcodes[i]["id"] === barcodeId) {
                barcodes = barcodes.filter(function (element) {
                    return element["id"] !== barcodeId;
                });
                storageManager.updateStorage(barcodes);
                break;
            }
        }
        refresh();
    }
}