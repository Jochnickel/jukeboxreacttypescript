export default interface IPlayer {
    play: () => any;
    pause: () => any;
    loadURL: (url: string) => any;
}