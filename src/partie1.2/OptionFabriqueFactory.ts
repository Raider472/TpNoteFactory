import { OptionRobot } from "./Interface";
import { BrasMécanique, CapteurInfrarouge, LanceMissiles, ModuleLaser } from "./OptionRobot";

export class FabriqueOptionRobotFactory {
    static creationoptions(type: string): OptionRobot {
        if(type === "bras" || type === "Bras") {
            return new BrasMécanique();
        }
        else if(type === "module laser" || type === "Module laser") {
            return new ModuleLaser();
        }
        else if(type === "capteur infra" || type === "Capteur infra") {
            return new CapteurInfrarouge();
        }
        else if(type === "lance-missiles" || type === "Lance-missiles") {
            return new LanceMissiles();
        }
        else {
            throw new Error("Error")
        }
    }
}