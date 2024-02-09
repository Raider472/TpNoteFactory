import { Robot } from "./Interface";

export class RobotDomestique implements Robot {
    log = console.log;
  
    public assembler(): void {
      this.log("Le Robot Domestique est assemblé avec succès.");
    }
  
    public activer(): void {
      this.log("Le Robot Domestique est activé.");
    }
  
    public travailler(): void {
      this.log("Le Robot Domestique effectue des tâches ménagères.");
    }
}
  
  export class RobotIndustriel implements Robot {
    log = console.log;
  
    public assembler(): void {
      this.log("Le Robot Industriel est assemblé avec succès.");
    }
  
    public activer(): void {
      this.log("Le Robot Industriel est activé.");
    }
  
    public travailler(): void {
      this.log("Le Robot Industriel travaille sur une chaîne de production.");
    }
}
  
  export class RobotMedical implements Robot {
    log = console.log;
  
    public assembler(): void {
      this.log("Le Robot Medical est assemblé avec succès.");
    }
  
    public activer(): void {
      this.log("Le Robot Medical est activé.");
    }
  
    public travailler(): void {
      this.log("Le Robot Médical effectue des procédures médicales.");
    }
}