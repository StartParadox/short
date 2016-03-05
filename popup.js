 var APIkey = "AIzaSyB4DkQLaq2ZOXHnpuAsuUMJbh33WbZbA34";
 var APIUrl = "https://www.googleapis.com/urlshortener/v1/url?key=" + APIkey;

 // Get url of current tab once extension icon is clicked and shorten it using shortenUrl function
 function getUrl() {

     chrome.tabs.query({
         'active': true,
         'lastFocusedWindow': true
     }, function (tabs) {
         shortenUrl(tabs[0].url);
     });

 }


 //Call Google URL Shortener API to get shortened version of URL
 function shortenUrl(url) {
     $.post(APIUrl, {
             longUrl: url
         },
         function (data) {
            console.log("data: " + data.id);
            document.getElementById("short-url").innerHTML = data.id;

         }, "json");
 }

getUrl();
alert("Success!");
//document.getElementById("copy-link").addEventListener("click", copyfunction);

var btn = document.getElementById('copy-link');
var clipboard = new Clipboard(btn);


clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    alert("Success!");
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});