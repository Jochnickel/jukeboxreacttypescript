import React from "react";
import IPlayerProps from "./IPlayerProps";
import IPlayer from "./IPlayer";
import YTPlayer from "./YTPlayer";
import SpotPlayer from "./SpotPlayer";
import DeezPlayer from "./DeezPlayer";

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
    private player!: IPlayer;

    constructor(props: any) {
        super(props);
        switch (props.player) {
            case players.YOUTUBE: // class YTPlayer implements IPLayer
                // @ts-ignore
                // type 'Element' is missing following properties from IPlayer: play, pause

                this.player = <YTPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            case players.SPOTIFY:
                // @ts-ignore
                this.player = <SpotPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            case players.DEEZER:
                // @ts-ignore
                this.player = <DeezPlayer url={props.url} onEnd={props.onEnd} autoplay={props.autoplay} />;
                break;
            default:
                break;
        }
    }

    public play() {
        this.player.play();
    }

    public pause() {
        this.player.pause();
    };

    public loadURL(url: string) {
        this.player.loadURL(url);
    }

    render() {
        return (
            <>
                {this.player}
            </>
        );
    }
}