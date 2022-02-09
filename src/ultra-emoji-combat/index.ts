import Lutador from "./Emoji";

// Programa principal
const L = new Array(5)
L[0] = new Lutador("Pretty Boy", "França", 31, 1.75, 68.9, 11, 3, 1)
L[1] = new Lutador("PutsScript", "Brasil", 29, 1.68, 57.8, 14, 2, 3)
L[2] = new Lutador("Snapshadow", "EUA", 35, 1.65, 80.9, 12, 2, 1)
L[3] = new Lutador("Dead Code", "Austrália", 28, 1.93, 81.9, 13, 0 , 2)
L[4] = new Lutador("See Sharp", "Holanda", 61, 72.4, 1.72, 10, 2, 3)

L[0].empatarLuta()
L[0].apresentar()
