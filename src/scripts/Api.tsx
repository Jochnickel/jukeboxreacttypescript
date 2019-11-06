import Token from "./Token";
import ISong from "./ISong";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DEL = "DELETE";

export default class Api {

    private static url1 = "http://yt-party.com/api";

    public static lobby = (() => {

        const url2 = Api.url1 + "/lobby";

        const index = (hash: string) => {
            const url3 = url2 + "/" + hash;
            return {
                get: () => Token.fetch(url3, {method: GET}).then(r => r.json()),
                put: () => Token.fetch(url3, {method: PUT}).then(r => r.json()),
                delete: () => Token.fetch(url3, {method: DEL}).then(r => r.json()),
                playlist: (() => {
                    const url4 = url3 + "/playlist";
                    return {
                        get: () => Token.fetch(url4, {method: GET}).then(r => r.json()),
                        delete: () => Token.fetch(url4, {method: DEL}).then(r => r.json())
                    };
                })(),
                song: (() => {
                    const url4 = url3 + "/song";
                    const index = (songID: string) => {
                        const url5 = url4 + "/" + songID;
                        return {
                            delete: () => Token.fetch(url5, {method: DEL}).then(r => r.json()),
                            vote: (action: string) => {
                                const url6 = url5 + "/vote/" + action;
                                return {
                                    post: () => Token.fetch(url6, {method: POST}).then(r => r.json())
                                }
                            }
                        }
                    };
                    index.post = (data: { url: string, title: string }) => Token.fetch(url4, {
                        method: POST,
                        body: JSON.stringify(data)
                    }).then(r => r.json());
                    return index;
                })()
            };
        };

        index.get = () => Token.fetch(url2, {method: GET}).then(r => r.json());
        index.post = (data: { pass: string, name?: string }) =>
            Token.fetch(url2, {method: POST, body: JSON.stringify(data)}).then(r => r.json());
        return index;
    })();

    public static YT = (() => {
        const YT = () => {
        };
        YT.randomVideo = () => {
            const links = [
                "https://www.youtube.com/watch?v=FmRtF1rIuSQ",
                "https://www.youtube.com/watch?v=nd6neK3a5es",
                "https://www.youtube.com/watch?v=iNqL2QR-hFs",
                "https://www.youtube.com/watch?v=h3p_9-R_siI",
                "https://www.youtube.com/watch?v=JfO8uXlY1Wc"
            ];
            return links[Math.floor(Math.random() * links.length)];
        };
        YT.urlToSong = (url: string) => {
            return fetch("http://api.rest7.com/v1/youtube_info.php?url=" + url, {method: GET}).then(j => j.json()).then(d => {
                d.title = (d.title as string).replace(/&amp;/g,"&").replace(/&quot;/g, '"').replace(/&apos;/g,"'").replace(/&gt;/g,">").replace(/&lt;/g,"<");
                return d;
            });
        };
        return YT;
    })
    ();
}