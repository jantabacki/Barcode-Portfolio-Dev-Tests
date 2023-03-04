class RemoteStorageManager {

    getBarcodes() {
        var result = window.localStorage.getItem("barcode-portfolio-remote-storage-barcodes");
        if (result === undefined || result === null) {
            return [];
        } else {
            return JSON.parse(window.localStorage.getItem("barcode-portfolio-remote-storage-barcodes"));
        }
    }

    updateBarcodes($barcodes) {
        window.localStorage.setItem("barcode-portfolio-remote-storage-barcodes", JSON.stringify($barcodes));
    }
}