import React from "react";
import YouTube from "react-youtube-typescript";
import Card from "react-bootstrap/Card";
import IPlayer from "./IPlayer";
import IPlayerProps from "./IPlayerProps";
import getYouTubeID from "get-youtube-id-definately";


export default class YTPlayer extends React.Component<IPlayerProps> implements IPlayer {
    static defaultProps = {
        autoplay: false,
        url: "2g811Eo7K8U",
        onEnd: null
    };
    state = {
        statusText: "page loading...",
        blur: false
    };
    private target: any;

    private onClick = (e: any) => {
        switch (this.target.getPlayerState()) {
            case 1:
                this.target.pauseVideo();
                this.setState({statusText: "Pause", blur: true});
                break;
            default:
                this.target.playVideo();
                this.setState({statusText: "", blur: false});
                break;
        }
    };
    private onReady = (event: any) => {
        this.target = event.target;
        if (this.props.autoplay) {
            this.target.playVideo();
        }
        this.setState({statusText: "", blur: false});
    };
    private onError = () => {
        this.setState({statusText: "Error", blur: true});
    };

    private onStateChange= (e: any) => {
        if(e.data===YouTube.PlayerState.ENDED){
            this.props.removeSong(this.props.song);
        }
    };

    render() {
        return (
            <Card border="dark">
                <div style={{position: "relative",width:"100%",paddingBottom:"60%"}} className={"container" + (this.state.blur ? " blur" : "")}>
                    <YouTube className={"video"}
                             videoId={getYouTubeID(this.props.song.url)}
                             opts={{playerVars: {"controls": 0, "showinfo": 0}}}
                             onReady={this.onReady}
                             onError={this.onError}
                             onStateChange={this.onStateChange}
                    />
                </div>
                <Card.ImgOverlay onClick={this.onClick}>{this.state.statusText}</Card.ImgOverlay>
            </Card>
        );
    }

    public pause() {
    }

    public play() {
    }

    public loadURL(url: string) {
    }

}