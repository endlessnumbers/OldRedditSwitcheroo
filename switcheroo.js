var url = window.location.href;
var dotIndex = url.indexOf('.');
if (url.substring(dotIndex-3, dotIndex)!="old") {
    url = url.substring(dotIndex);
    window.location.replace("https://old" + url);
}