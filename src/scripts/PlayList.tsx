import React from "react";

export default class PlayList extends React.Component<{hash: string}>{
    state = {
        items: []
    };

    render() {
        return (
            <>
                {this.state.items}
            </>
        );
    }
}