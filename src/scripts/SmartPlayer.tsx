import React from "react";
import IPlayerProps from "./Player/IPlayerProps";
import IPlayer from "./Player/IPlayer";
import YTPlayer from "./Player/YTPlayer";
import SpotPlayer from "./Player/SpotPlayer";
import DeezPlayer from "./Player/DeezPlayer";

enum players {
    YOUTUBE,
    SPOTIFY,
    DEEZER
}

interface props extends IPlayerProps {
    player: players;
}


export default class SmartPlayer extends React.Component<props> implements IPlayer {
    public static YOUTUBE = players.YOUTUBE;
    public static SPOTIFY = players.SPOTIFY;
    public static DEEZER = players.DEEZER;
    private player = <></>;

    constructor(props: any) {
        super(props);
        switch (props.player) {
            case players.YOUTUBE:
                this.player = <YTPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            case players.SPOTIFY:
                this.player = <SpotPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            case players.DEEZER:
                this.player = <DeezPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            default:
                break;
        }
    }

    public play() {

    }

    public pause() {

    };

    public loadURL(url: string) {

    }

    render() {
        return (
            <>

            </>
        );
    }
}