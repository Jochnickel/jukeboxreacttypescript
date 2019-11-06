import React from "react";
import YouTube from "react-youtube-typescript";
import Card from "react-bootstrap/Card";
import IPlayerProps from "./IPlayerProps";
import getYouTubeID from "get-youtube-id-definately";
import {useDoubleClick} from "doubleclicker";

interface iTarget {
    loadVideoById: any;
    playVideo: any;
    pauseVideo: any;
    getPlayerState: any;
}

export default class YTPlayer extends React.Component<IPlayerProps> {
    state = {
        statusText: "page loading...",
        blur: false,
        videoID: getYouTubeID(this.props.song.url)
    };
    private target!: iTarget;


    private onClick = (a: any) => {
        const e = a.currentTarget.parentNode;
        useDoubleClick({
            onClick: () => {
                switch (this.target && this.target.getPlayerState()) {
                    case 1:
                        this.target.pauseVideo();
                        this.setState({statusText: "Pause", blur: true});
                        break;
                    default:
                        this.target.playVideo();
                        this.setState({statusText: "", blur: false});
                        break;
                }
            }, onDoubleClick: () => {
                const doc = (document as any);
                if (e.requestFullscreen) {
                    (doc.fullscreenElement) ? doc.exitFullscreen() : e.requestFullscreen();
                } else if (e.webkitRequestFullscreen) {
                    (doc.webkitFullscreenElement) ? doc.webkitExitFullscreen() : e.webkitRequestFullscreen();
                } else if (e.mozRequestFullScreen) {
                    (doc.mozFullscreenElement) ? doc.mozExitFullscreen() : e.mozRequestFullScreen();
                } else if (e.msRequestFullscreen) {
                    (doc.msFullscreenElement) ? doc.msExitFullscreen() : e.msRequestFullscreen();
                }
            }
        });

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

    private onStateChange = (e: { data: number; target: iTarget}) => {
        if (e.data === YouTube.PlayerState.ENDED) { // https://www.youtube.com/watch?v=wUF9DeWJ0Dk
            this.props.removeSong(this.props.song).then(r=>{
                console.log("deleted",r);
            });
            e.target.loadVideoById(getYouTubeID(this.props.song.url));
        }
    };

    render() {
        return (
            <Card border="dark" style={{backgroundColor: "black"}}>
                <div style={{position: "relative", width: "100%", paddingBottom: "60%"}}
                     className={"container" + (this.state.blur ? " blur" : "")}>
                    <YouTube className={"video"}
                             videoId={this.state.videoID}
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

}