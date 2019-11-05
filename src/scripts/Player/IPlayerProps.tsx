import ISong from "../ISong";
import IPlayerControls from "./IPlayerControls";

export default interface IPlayerProps extends IPlayerControls{
    autoplay?: boolean;
    song: ISong;
    onEnd?: ()=>any;
    [any: string]: any;
}