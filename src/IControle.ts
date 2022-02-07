export default interface Controlador {
    // métodos abstratos
    ligar(): void
    desligar(): void
    maisVolume(): void
    menosVolume(): void
    desligarMudo(): void
    ligarMudo(): void
    play(): void
    pause(): void
    abrirMenu(): void
    fecharMenu(): void
}