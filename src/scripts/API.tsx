export default class API {
    public static post(url: string, body: FormData, callbackF: (d: any) => any) {
        fetch("https://cors-anywhere.herokuapp.com/" + url, {
            method: "post",
            body: body
        })
            .then(r => r.json())
            .then(j => j.data)
            .then(callbackF);
    }

    public static get(url: string, callbackF: (d: any) => any) {
        fetch(url, {
            method: "GET",
            headers: {
                'X-USER-ID': "12345679801234567"
            }
        })
            .then(r => r.json())
            .then(j => j.data)
            .then(callbackF);
    }

    // extracts argument after / like ("asdASD/lobby/0123/","lobby")=>0123
    public static arg(from: string, name: string) {
        console.log("arg", from);
        const out = from.replace(new RegExp(".*/" + name + "/"), "").replace(/\/.*/, "");
        console.log("arg", out);
        return out;
    }

    public static setSavedSession(lobby: object) {
        localStorage["session"] = JSON.stringify(lobby);
    }

    public static getSavedSession() {
        return {name: "", hash: "c5626", owns_lobby: "1", owner: "12345678901234568"};
        // return localStorage["session"] && JSON.parse(localStorage["session"]);
    }
}