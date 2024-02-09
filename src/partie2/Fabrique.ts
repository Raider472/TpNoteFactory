import { Patient } from "./Metiers";
import { Personne } from "./interface";


export interface FabriquerMetier {
    createMetier(): Personne;
}

export class FabriquerPatient implements FabriquerMetier {
    createMetier(): Personne {
      return new Patient();
    }
}
  
export class FabriquerModuleLaser implements FabriquerMetier {
    createMetier(): Personne {
      return new ModuleLaser();
    }
}
  
export class FabriquerCapteurIR implements FabriquerMetier {
    createMetier(): Personne {
      return new CapteurInfrarouge();
    }
}

export class FabriquerLanceMissile implements FabriquerMetier {
  createMetier(): Personne {
    return new LanceMissiles();
  }
}