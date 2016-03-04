var key = "AIzaSyB4DkQLaq2ZOXHnpuAsuUMJbh33WbZbA34";
var serviceUrl="https://www.googleapis.com/urlshortener/v1/url?key="+key;

//Call getUrl function once extension icon is clicked
chrome.browserAction.onClicked.addListener(getUrl);


// Get url of current tab once extension icon is clicked and shorten it using shortenUrl function
function getUrl(){
  
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    shortenUrl(tabs[0].url);
});  
    
}


//Call Google URL Shortener API to get shortened version of URL
function shortenUrl(url) {
 $.post(serviceUrl, {longUrl: url},
  function(data){
    console.log("data" + data.id);
  }, "json");
}

    
