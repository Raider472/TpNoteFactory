import { OptionRobot } from "./Interface";

export class BrasMécanique implements OptionRobot {
    public prix: number = 50

    ajouterOption(): void {
        console.log(`Ajout de l'option Bras Mécanique (Coût : ${this.prix} $).`)
    }

    getDescription(): void {
        console.log(`- Bras Mécanique (Coût : ${this.prix} $)`)
    }
}
  
export class CapteurInfrarouge implements OptionRobot {
    public prix: number = 30

    ajouterOption(): void {
        console.log(`Ajout de l'option Capteur infrarouge (Coût : ${this.prix} $).`)
    }

    getDescription(): void {
        console.log(`- Capteur infrarouge (Coût : ${this.prix} $)`)
    }
}
  
export class ModuleLaser implements OptionRobot {
    public prix: number = 100

    ajouterOption(): void {
        console.log(`Ajout de l'option Module Laser (Coût : ${this.prix} $).`)
    }

    getDescription(): void {
        console.log(`- Module Laser (Coût : ${this.prix} $)`)
    }
}

export class LanceMissiles implements OptionRobot {
    public prix: number = 230

    ajouterOption(): void {
        console.log(`Ajout de l'option Lance-missiles (Coût : ${this.prix} $).`)
    }

    getDescription(): void {
        console.log(`- Lance-missiles (Coût : ${this.prix} $)`)
    }
}