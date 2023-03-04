class StorageManager {

    getBarcodes() {
        var result = window.localStorage.getItem("barcode-portfolio-storage-barcodes");
        if (result === undefined || result === null) {
            return [];
        } else {
            return JSON.parse(window.localStorage.getItem("barcode-portfolio-storage-barcodes"));
        }
    }

    updateStorage($barcodes) {
        window.localStorage.setItem("barcode-portfolio-storage-barcodes", JSON.stringify($barcodes));
    }
}