function barcodeClicked($id) {
    var barcode = undefined;
    for (var i = 0; i < barcodeScope.barcodes.length; i++) {
        if (barcodeScope.barcodes[i].id === $id) {
            barcode = barcodeScope.barcodes[i];
            break;
        }
    }
    if (barcode !== undefined) {
        if (barcode["type"] !== undefined && barcode["type"] === "barcode") {
            document.getElementById("barcode-placement").innerHTML = '<svg class="barcode" jsbarcode-format="CODE128" jsbarcode-value="' + barcode["code"] + '" jsbarcode-textmargin="0" jsbarcode-fontoptions="bold"></svg>';
            JsBarcode(".barcode").init();
            document.getElementById("qrcode-placement").innerHTML = "";
        } else if (barcode["type"] !== undefined && barcode["type"] === "qrcode") {
            document.getElementById("qrcode-placement").innerHTML = "";
            new QRCode(document.getElementById("qrcode-placement"), barcode["code"]);
            document.getElementById("barcode-placement").innerHTML = "";
        }
        document.getElementById("barcode-group").innerHTML = barcode.group;
        document.getElementById("barcode-name").innerHTML = barcode.name;
    }
}