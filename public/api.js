function sendApi(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                let data = xhr.responseText;
                if (this.status == 200) {
                    if (typeof this.responseText == "string") {
                        data = JSON.parse(data);
                    }
                    resolve(data);
                }
                reject(this.responseText);
            }
        }
        xhr.send();
    })
}
