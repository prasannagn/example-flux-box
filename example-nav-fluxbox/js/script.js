document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("magnify").onclick = function (evt) {
        evt.target.style.display = 'none';
        document.getElementById("search").style.display = 'block';
    };
});



