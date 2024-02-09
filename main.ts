import { FabriqueRobotFactory } from "./src/RobotFabriqueFactory";

let robotDomestique = FabriqueRobotFactory.creationRobot("domestique");
let robotIndustriel = FabriqueRobotFactory.creationRobot("industriel");
let robotMedical = FabriqueRobotFactory.creationRobot("medical");

console.log("Assemblage d'un Robot Domestique...")
robotDomestique.assembler()
console.log("Activation du Robot Domestique...")
robotDomestique.activer()
robotDomestique.travailler()
console.log("\n")

console.log("Assemblage d'un Robot Industriel...")
robotIndustriel.assembler()
console.log("Activation du Robot industriel...")
robotIndustriel.activer()
robotIndustriel.travailler()
console.log("\n")

console.log("Assemblage d'un Robot Medical...")
robotMedical.assembler()
console.log("Activation du Robot Medical...")
robotMedical.activer()
robotMedical.travailler()