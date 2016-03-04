var key = "AIzaSyB4DkQLaq2ZOXHnpuAsuUMJbh33WbZbA34";
var serviceUrl="https://www.googleapis.com/urlshortener/v1/url?key="+key;


// Get url of current tab when icon is clicked
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    shortenUrl(tabs[0].url);
});


//Call Google URL Shortener API to get shortened version of URL
var shortenUrl = function(url) {
 $.post(serviceUrl, {longUrl: url},
  function(data){
    console.log("data" + data.id);
  }, "json");
  });

    
