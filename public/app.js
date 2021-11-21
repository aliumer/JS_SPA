function getContent(fragmentId, callback) {

    // look up what fragment you are searching for in the object
    var request = new XMLHttpRequest();

    // Call the callback with the content loaded from the file.
    request.addEventListener('load', function () {
        callback(request.responseText);
    });

    // Fetch the partial HTML file for the given fragment id.
    var pathName = "/public/" + fragmentId + ".html";
    request.open("GET", pathName);
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.send({});
}

function loadContent() {
    var contentDiv = document.getElementById("app");
    fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
        contentDiv.innerHTML = content;
    });

}


if (!location.hash) {
    location.hash = "#home";
}

window.addEventListener('hashchange', loadContent);

loadContent();
