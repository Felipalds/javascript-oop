import Lutador from "./Emoji";

export default interface ILuta{
    marcarLuta(l1: Lutador, l2:Lutador): void;
    lutar(): void;
}