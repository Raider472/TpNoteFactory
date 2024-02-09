import { Robot } from "./Interface";
import { RobotDomestique, RobotIndustriel, RobotMedical } from "./Robot";

export class FabriqueRobotFactory {
    static creationRobot(type: string): Robot {
        if(type === "domestique" || type === "Domestique") {
            return new RobotDomestique();
        }
        else if(type === "industriel" || type === "industriel") {
            return new RobotIndustriel();
        }
        else if(type === "medical" || type === "Medical") {
            return new RobotMedical();
        }
        else {
            throw new Error("Error")
        }
    }
}