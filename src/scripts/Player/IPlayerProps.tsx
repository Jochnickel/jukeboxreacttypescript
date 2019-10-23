export default interface IPlayerProps {
    autoplay?: boolean;
    url: string;
    onEnd: ()=>any;
}