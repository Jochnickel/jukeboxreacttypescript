import React from "react";
import IPlayerProps from "./IPlayerProps";
import YTPlayer from "./YTPlayer";
import SpotPlayer from "./SpotPlayer";
import DeezPlayer from "./DeezPlayer";

export default class SmartPlayer extends React.Component<IPlayerProps> {
    render() {
        const err = <h2>coudln't load a player to this song</h2>;
        const {song} = this.props;
        const url = song && song.url;
        return (!url) ? err : (/youtube/.test(url) || /youtu\.be/.test(url)) ? <YTPlayer {...this.props}/>
            : (/spotify/.test(url)) ? <SpotPlayer {...this.props}/>
                : (/deezer/.test(url)) ? <DeezPlayer {...this.props}/>
                    : err;
    }
}