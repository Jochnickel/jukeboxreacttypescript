import IPlayer from "./IPlayer";
import React from "react";
import IPlayerProps from "./IPlayerProps";

export default class DeezPlayer extends React.Component<IPlayerProps> implements IPlayer {
    loadURL(url: string) {
    }

    pause() {
    }

    play() {
    }
}