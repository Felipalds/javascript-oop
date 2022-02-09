import Lutador from "./Emoji";
import Luta from './Luta'

// Programa principal
const L = new Array(5)
L[0] = new Lutador("Pretty Boy", "França", 31, 1.75, 68.9, 11, 3, 1)
L[1] = new Lutador("Putscript", "Brasil", 29, 1.68, 57.8, 14, 2, 3)
L[2] = new Lutador("Snapshadow", "EUA", 35, 1.65, 80.9, 12, 2, 1)
L[3] = new Lutador("Dead Code", "Austrália", 28, 1.93, 81.9, 13, 0 , 2)
L[4] = new Lutador("See Sharp", "Holanda", 61, 72.4, 1.72, 10, 2, 3)
L[5] = new Lutador("Taipe Oerreeme", "Ucrânia", 62, 91.4, 1.98, 0, 2, 5)

const luta01 = new Luta()
luta01.marcarLuta(L[0], L[1])
luta01.lutar()
L[0].status()
L[1].status()
