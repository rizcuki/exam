document.addEventListener("DOMContentLoaded", function() {
    var url;
    var kunciurl = 'false';

    // Clear the referrer
    document.referrer = ''

    if (localStorage.getItem('url')) {
        url = localStorage.getItem('url');
    } else {
        url = 'https://11.sman17kabtangerang.sch.id/';
    }

    if (url) {
        document.getElementById('url').value = url;
    } else {
        document.getElementById('url').value = '';
    }

    function run() {
        if (kunciurl === "true") {
            url = "http://192.168.0.201/";
        } else {
            url = document.getElementById('url').value;
        }

        localStorage.setItem('url', url);

        // Replace the entire body HTML with the iframe
        document.body.innerHTML = '<iframe id="iframe" src="'+url+'?examkey=wHCVItIDQ0l7cwM50h4AYe5DTgHxWdEcmQtGoAqIJgNE7HkTBQoyxlYV1W3V70aLcU5jz4XKj2tnYRa9Ewp4mVyxMGnECtiIg1lU" frameborder="0" style="width: 100%; height: 100vh;"></iframe>';
    }

    document.getElementById("submit").addEventListener("click", run);

    setTimeout(function() {
        if (kunciurl === "true") {
            run();
        }
        document.getElementById('bg').style.display = 'none';
    }, 3000);
});
