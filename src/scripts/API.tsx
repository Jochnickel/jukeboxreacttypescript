export default class API {
    public static post(url: string, body: FormData, callbackF: (d: any)=>any) {
        fetch("https://cors-anywhere.herokuapp.com/"+url, {
            method: "post",
            body: body
        }).then(r => r.json()).then(j => j.data)
            .then(callbackF);

    }
}