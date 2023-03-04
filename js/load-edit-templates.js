var storageManager = new StorageManager();
var barcodes = storageManager.getBarcodes();
for (var i = 0; i < barcodes.length; i++) {
    var barcode = barcodes[i];
    var innerHTMLValue = "";
    innerHTMLValue += '<div class="input-group" style="margin-top: 30px;">';
    innerHTMLValue += '<div class="input-group-prepend">';
    innerHTMLValue += '<span class="input-group-text translation-manager-property" style="width: 75px;">modify-user-barcode-name-label</span>';
    innerHTMLValue += '</div>';
    innerHTMLValue += '<input type="text" class="form-control translation-manager-property" placeholder="modify-user-barcode-name-label" id="barcode-name-' + barcode["id"] + '" value="' + barcode["name"] + '">';
    innerHTMLValue += '<button type="button" class="btn btn-danger translation-manager-property" onclick="deleteBarcode(\'' + barcode["id"] + '\')" style="margin-left: 10px;">remove-user-barcode</button>';
    innerHTMLValue += '</div>';

    innerHTMLValue += '<div class="input-group" style="margin-top: 10px;">';
    innerHTMLValue += '<div class="input-group-prepend">';
    innerHTMLValue += '<span class="input-group-text translation-manager-property" style="width: 75px;">modify-user-barcode-group-label</span>';
    innerHTMLValue += '</div>';
    innerHTMLValue += '<input type="text" class="form-control translation-manager-property" placeholder="modify-user-barcode-group-placeholder" id="barcode-group-' + barcode["id"] + '" value="' + barcode["group"] + '">';
    innerHTMLValue += '</div>';

    innerHTMLValue += '<div class="input-group" style="margin-top: 10px;">';
    innerHTMLValue += '<div class="input-group-prepend">';
    innerHTMLValue += '<span class="input-group-text translation-manager-property" style="width: 75px;">modify-user-barcode-code-label</span>';
    innerHTMLValue += '</div>';
    innerHTMLValue += '<input type="text" class="form-control translation-manager-property" placeholder="modify-user-barcode-code-placeholder" id="barcode-code-' + barcode["id"] + '" value="' + barcode["code"] + '">';
    innerHTMLValue += '</div>';

    innerHTMLValue += '<div class="input-group" style="margin-top: 10px;">';
    innerHTMLValue += '<div class="input-group-prepend">';
    innerHTMLValue += '<span class="input-group-text translation-manager-property" style="width: 75px;">modify-user-barcode-type-label</span>';
    innerHTMLValue += '</div>';
    innerHTMLValue += '<select class="form-control" id="barcode-type-' + barcode["id"] + '">';
    if (barcode["type"] === "barcode") {
        innerHTMLValue += '<option value="barcode" class="translation-manager-property" selected>edit-user-barcode-select-type-barcode</option>';
        innerHTMLValue += '<option value="qrcode" class="translation-manager-property">edit-user-barcode-select-type-qrcode</option>';
    } else if (barcode["type"] === "qrcode") {
        innerHTMLValue += '<option value="barcode" class="translation-manager-property">edit-user-barcode-select-type-barcode</option>';
        innerHTMLValue += '<option value="qrcode" class="translation-manager-property" selected>edit-user-barcode-select-type-qrcode</option>';
    }
    innerHTMLValue += '</select>';
    innerHTMLValue += '</div>';

    document.getElementById("edit-elements-placement").innerHTML += innerHTMLValue;
}