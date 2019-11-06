import ISong from "../ISong";

export default interface ILobbyControls {
    addSong: (url: string) => any;
    removeSong: (song: ISong) => Promise<Response>;
    voteSong: (song: ISong, up: boolean) => any;
    loadPlaylist: () => any;
}