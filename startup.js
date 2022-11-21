const loadarray = ["functions.js","main.js"]
function loadScripts(path) {
    var header = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = path
    header.appendChild(script);
}
window.addEventListener('load', function() {
    for (let i=0; i < loadarray.length; i++) {
        loadScripts(loadarray[i]);
    }
})

