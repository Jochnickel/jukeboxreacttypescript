import React from "react";
import YTPlayer from "./Player/YTPlayer";
import SmartPlayer from "./SmartPlayer";

export default class Host extends React.Component {
    constructor(props: any) {
        super(props);
    }

    playNext = () => {
        if (true) {
            let buf = this.state.player;
            this.state.player = this.state.next;
            this.state.next = this.state.player;
        }
    };
    private player1 = <SmartPlayer player={SmartPlayer.YOUTUBE} url={"PCicKydX5GE"} onEnd={this.playNext}/>;
    private player2 = <YTPlayer />;

    state = {
        player: this.player1,
        next: this.player2
    };

    render() {
        return (
            <>
                {this.state.player}
            </>
        );
    }
}