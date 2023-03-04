function addEmptyBarcode() {
    var barcode = { "id": generateUUID(), "name": "", "group": "", "code": "", "type": "barcode" };
    var storageManager = new StorageManager();
    var barcodes = storageManager.getBarcodes();
    barcodes.push(barcode);
    storageManager.updateStorage(barcodes);
    refresh();
}