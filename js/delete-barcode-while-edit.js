function deleteBarcode(barcodeId) {
    if (confirm(new TranslationManager().translatePhrase(SoftwareConfig.defaultLanguage, new Translations(), "are-you-sure-during-barcode-delete-message"))) {
        saveBarcodes();
        var storageManager = new StorageManager();
        var barcodes = storageManager.getBarcodes();
        barcodes = barcodes.filter(function (element) {
            return element["id"] !== barcodeId;
        });
        storageManager.updateStorage(barcodes);
        refresh();
    }
}