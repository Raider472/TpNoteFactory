import { FabriqueRobotFactory } from "./src/partie1.1/RobotFabriqueFactory";

let robotDomestique = FabriqueRobotFactory.creationRobot("domestique");
let robotIndustriel = FabriqueRobotFactory.creationRobot("industriel");
let robotMedical = FabriqueRobotFactory.creationRobot("medical");

console.log("Assemblage d'un Robot Domestique...")
robotDomestique.assembler()
console.log("Activation du Robot Domestique...")
robotDomestique.addOption("bras")
robotDomestique.addOption("Capteur infra")
robotDomestique.activer()
robotDomestique.travailler()
robotDomestique.getDescriptionAll()
console.log("\n")

console.log("Assemblage d'un Robot Industriel...")
robotIndustriel.assembler()
robotIndustriel.addOption("capteur infra")
robotIndustriel.addOption("module laser")
robotIndustriel.addOption("Bras")
robotIndustriel.addOption("lance-missiles")
console.log("Activation du Robot industriel...")
robotIndustriel.activer()
robotIndustriel.getDescriptionAll();
robotIndustriel.travailler()
console.log("\n")

console.log("Assemblage d'un Robot Medical...")
robotMedical.assembler()
console.log("Activation du Robot Medical...")
robotMedical.activer()
robotMedical.getDescriptionAll();
robotMedical.travailler()