import { OptionRobot } from "./Interface";
import { BrasMécanique, CapteurInfrarouge, LanceMissiles, ModuleLaser } from "./OptionRobot";

export interface FabriquerOptionRobot {
    createOption(): OptionRobot;
}

export class FabriquerBras implements FabriquerOptionRobot {
    createOption(): OptionRobot {
      return new BrasMécanique();
    }
}
  
export class FabriquerModuleLaser implements FabriquerOptionRobot {
    createOption(): OptionRobot {
      return new ModuleLaser();
    }
}
  
export class FabriquerCapteurIR implements FabriquerOptionRobot {
    createOption(): OptionRobot {
      return new CapteurInfrarouge();
    }
}

export class FabriquerLanceMissile implements FabriquerOptionRobot {
  createOption(): OptionRobot {
    return new LanceMissiles();
  }
}