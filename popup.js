    function init() {
        gapi.client.setApiKey('AIzaSyB4DkQLaq2ZOXHnpuAsuUMJbh33WbZbA34');
        gapi.client.load('urlshortener', 'v1').then(makeRequest);
    }


    function makeRequest() {
        var url = document.URL;
        console.log(url);
        var request = gapi.client.urlshortener.url.insert({
            'resource': {
                'longUrl': url
            }
        });
        request.then(function (response) {
            document.getElementById("short-url").innerHTML = response.result.id;
            console.log(response.result.id);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        console.log("PROGRAM IS READY YO");

        var butt = document.getElementById("copy-url");

        butt.addEventListener("click", function () {

            var inp = document.createElement("input");
            var urlText = document.getElementById("short-url");

            inp.setAttribute("value", urlText.innerHTML);
            document.body.appendChild(inp);

            //Highlight text
            inp.select();

            // Copy highlighted text
            document.execCommand("copy");

            // Remove from body
            document.body.removeChild(inp);
        });
    });