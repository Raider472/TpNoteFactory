import { OptionRobot } from "../partie1.2/Interface";
import { Robot } from "./Interface";
import { RobotDomestique, RobotIndustriel, RobotMedical } from "./Robot";

export interface FabriquerRobot {
    createRobot(): Robot;
}

export class FabriquerRobotDomestique implements FabriquerRobot {
    createRobot(): Robot {
      return new RobotDomestique();
    }
}
  
export class FabriquerRobotIndustriel implements FabriquerRobot {
    createRobot(): Robot {
      return new RobotIndustriel();
    }
}
  
export class FabriquerRobotMedical implements FabriquerRobot {
    createRobot(): Robot {
      return new RobotMedical();
    }
}