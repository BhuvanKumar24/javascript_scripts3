//callbacks

// function loadScript(src) {
//     var script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// function loadScript(src) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("loaded script with src:" + src);
//     };
//     document.body.appendChild(script)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("loaded script with src:" + src);
//     };
//     callback();
//     document.body.appendChild(script);
// }
// function hello() {
//     alert("Good Morning");
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello);
//============================================================================================