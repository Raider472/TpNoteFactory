import { OptionRobot } from "../partie1.2/Interface";
import { FabriqueOptionRobotFactory } from "../partie1.2/OptionFabriqueFactory";
import { Robot } from "./Interface";

export class RobotDomestique implements Robot {
  options: Array<OptionRobot> = []
  activated = false;
  
  public assembler(): void {
    console.log("Le Robot Domestique est assemblé avec succès.");
  }

  public activer(): void {
    this.activated = true;
    console.log("Le Robot Domestique est activé.");
  }

  public travailler(): void {
    console.log("Le Robot Domestique effectue des tâches ménagères.");
  }

  public addOption(optionName: string): void {
    if(this.activated) {
      throw new Error("Le Robot est activer")
    }
    else {
      let option = FabriqueOptionRobotFactory.creationoptions(optionName);
      this.options.push(option);
    }
  }

  public getDescriptionAll(): void {
    if(this.options.length === 0) {
      console.log("aucune modifications");
    }
    else {
      console.log("Description du Robot Domestique Personnalisé :")
      let cout = 0;
      for(let i = 0; i < this.options.length; i++) {
        this.options[i].getDescription()
        cout += this.options[i].prix
      }
      console.log(`Coût total du Robot Domestique Personnalisé : ${cout} $`)
    }
  }
}
  
export class RobotIndustriel implements Robot {
  options: Array<OptionRobot> = []
  activated = false;
  
  public assembler(): void {
    console.log("Le Robot Industriel est assemblé avec succès.");
  }

  public activer(): void {
    this.activated = true;
    console.log("Le Robot Industriel est activé.");
  }

  public travailler(): void {
    console.log("Le Robot Industriel travaille sur une chaîne de production.");
  }

  public addOption(optionName: string): void {
    if(this.activated) {
      throw new Error("Le Robot est activer")
    }
    else {
      let option = FabriqueOptionRobotFactory.creationoptions(optionName);
      this.options.push(option);
    }
  }

  public getDescriptionAll(): void {
    if(this.options.length === 0) {
      console.log("aucune modifications");
    }
    else {
      console.log("Description du Robot Industrielle Personnalisé :")
      let cout = 0;
      for(let i = 0; i < this.options.length; i++) {
        this.options[i].getDescription()
        cout += this.options[i].prix
      }
      console.log(`Coût total du Robot Industrielle Personnalisé : ${cout} $`)
    }
  }
}
  
export class RobotMedical implements Robot {
  options: Array<OptionRobot> = []
  activated = false;
  
  public assembler(): void {
    console.log("Le Robot Medical est assemblé avec succès.");
  }

  public activer(): void {
    this.activated = true;
    console.log("Le Robot Medical est activé.");
  }

  public travailler(): void {
    console.log("Le Robot Médical effectue des procédures médicales.");
  }

  public addOption(optionName: string): void {
    if(this.activated) {
      throw new Error("Le Robot est activer")
    }
    else {
      let option = FabriqueOptionRobotFactory.creationoptions(optionName);
      this.options.push(option);
    }
  }

  public getDescriptionAll(): void {
    if(this.options.length === 0) {
      console.log("aucune modifications");
    }
    else {
      console.log("Description du Robot Medical Personnalisé :")
      let cout = 0;
      for(let i = 0; i < this.options.length; i++) {
        this.options[i].getDescription()
        cout += this.options[i].prix
      }
      console.log(`Coût total du Robot Medical Personnalisé : ${cout} $`)
    }
  }
}