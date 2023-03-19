class StorageManager {

    getBarcodes() {
        var result = window.localStorage.getItem(SoftwareConfig.userStorageName);
        if (result === undefined || result === null) {
            return [];
        } else {
            return JSON.parse(window.localStorage.getItem(SoftwareConfig.userStorageName));
        }
    }

    updateStorage($barcodes) {
        window.localStorage.setItem(SoftwareConfig.userStorageName, JSON.stringify($barcodes));
    }
}