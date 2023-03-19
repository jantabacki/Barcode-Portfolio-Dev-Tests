class RemoteStorageManager {

    getBarcodes() {
        var result = window.localStorage.getItem(SoftwareConfig.predefinedStorageName);
        if (result === undefined || result === null) {
            return [];
        } else {
            return JSON.parse(window.localStorage.getItem(SoftwareConfig.predefinedStorageName));
        }
    }

    updateBarcodes($barcodes) {
        window.localStorage.setItem(SoftwareConfig.predefinedStorageName, JSON.stringify($barcodes));
    }
}