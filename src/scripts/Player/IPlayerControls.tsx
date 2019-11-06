import ISong from "../ISong";

export default interface IPlayerControls {
    addSong: (url: string) => any;
    removeSong: (song: ISong) => any;
    voteSong: (song: ISong, up: boolean) => any;
}