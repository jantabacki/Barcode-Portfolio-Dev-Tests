var configuration = RemotePredefinedConfiguration.sets;
for (var i = 0; i < configuration.length; i++) {
    document.getElementById("center-div-with-sets").innerHTML += '<div style="margin-bottom:250px;"><div style="margin-bottom:10px;">' + configuration[i].setName + '</div>' + '<a href="' + SoftwareConfig.baseURL + '/remote-configuration-executor.html?' + configuration[i].setId + '"><span id="qrcode-' + configuration[i].setId + '"></span></a>' + '</div>';
}

for (var i = 0; i < configuration.length; i++) {
    new QRCode("qrcode-" + configuration[i].setId, SoftwareConfig.baseURL + "/remote-configuration-executor.html?" + configuration[i].setId);
}