export default class API {
    public static post(data: FormData){
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://yt-party.com/api/lobby");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.18.0");
        xhr.setRequestHeader("Accept", "*/*");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "edcfea3f-d353-4165-9609-7c1c910d4f96,bbe50635-a7ef-4ecc-aea4-18b2b8901fab");
        xhr.setRequestHeader("Host", "yt-party.com");
        xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        xhr.setRequestHeader("Content-Length", "295");
        xhr.setRequestHeader("Connection", "keep-alive");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);
    }
    public static newLobby(data :{name: string, pass: string}) {
        let request = new XMLHttpRequest();
        request.open('POST', 'yt-party.com/api/lobby', true);
        request.setRequestHeader('Content-Type', 'multipart/form-data');
        request.send();
    }
}