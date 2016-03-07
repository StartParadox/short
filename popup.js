 /*
 var APIkey = "AIzaSyB4DkQLaq2ZOXHnpuAsuUMJbh33WbZbA34";
  var APIUrl = "https://www.googleapis.com/urlshortener/v1/url?key=" + APIkey;
 */


 // Get url of current tab once extension icon is clicked and shorten it using shortenUrl function

 /* function getUrl() {
      chrome.tabs.query(
     {
          'active': true,
          'currentWindow': true
      }, 
     function (tabs) {
         var currUrl = tabs[0].url; 
          shortenUrl(currUrl);
         console.log(currUrl);
         alert(currUrl);
      });

  }*/

 /*
  function getUrl() {
      var currUrl = window.location.href;
      shortenUrl(currUrl);
      console.log(currUrl);
  }

  //Call Google URL Shortener API to get shortened version of URL
  function shortenUrl(url) {
      $.post(APIUrl, {
          longUrl: url
      }, function (data) {
          console.log(data);
          alert(data);
          alert(data.id);
          console.log("data: " + data.id);
          document.getElementById("short-url").innerHTML = data.id;

      }, "json");
  }

  document.addEventListener("DOMContentLoaded", getUrl);
 */