
   
  // Code client

import { AgentEntretien, Infirmier, Secretaire } from "./src/partie2/Metiers";

   
  const agent1 = new AgentEntretien('Dupont', 'Paul', 40, 'Service A');
  agent1.nettoyer();
   
  const secretaire1 = new Secretaire('Martin', 'Alice', 30, 'Cardiologie');
  secretaire1.prendreRendezVous(); 
   
  const infirmier1 = new Infirmier('Durand', 'Jean', 35);
   
  const patient1 = new Patient('Lefevre', 'Sophie', 25);
  infirmier1.soigner(patient1);
   
  const chirurgien1 = new Chirurgien('Leroy', 'Pierre', 45, 'Cardiologie');
  chirurgien1.operer(patient1);
   
  // normalement c'est mieux d'anesthésier le patient avant de l'opérer :p
  const anesthesiste1 = new Anesthesiste('Leroy', 'Pierre', 45);
  anesthesiste1.anesthesier(patient1);
   
  const patient2 = new Patient('Lefevre', 'Sophie', 25);
  const cardiologue1 = new Cardiologue('Leroy', 'Pierre', 45, 'Cardiologie');
  cardiologue1.ausculter(patient2);
   
  const cuisinier1 = new Cuisnier('Leroy', 'Pierre', 45);
  cuisinier1.cuisiner();