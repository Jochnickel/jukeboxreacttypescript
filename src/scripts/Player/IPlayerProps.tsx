import ISong from "../ISong";
import ILobbyControls from "./ILobbyControls";

export default interface IPlayerProps extends ILobbyControls{
    autoplay?: boolean;
    song: ISong;
    onEnd?: ()=>any;
    [any: string]: any;
}