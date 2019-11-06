import React from "react";
import IPlayerProps from "./IPlayerProps";
import YTPlayer from "./YTPlayer";
import SpotPlayer from "./SpotPlayer";
import DeezPlayer from "./DeezPlayer";

export default class SmartPlayer extends React.Component<IPlayerProps> {
    render() {
        const err1 = <h2>Playlist is empty</h2>;
        const err2 = <h2>coudln't load a player to this song</h2>;
        const {props} = this;
        const url = props.song && props.song.url;
        console.log("smPl", props)
        return (!url) ? err1 : (/youtube/.test(url) || /youtu\.be/.test(url)) ? <YTPlayer {...props}/>
            : (/spotify/.test(url)) ? <SpotPlayer {...props}/>
                : (/deezer/.test(url)) ? <DeezPlayer {...props}/>
                    : err2;
    }
}