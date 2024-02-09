import { Personne } from "./interface";

export class Patient implements Personne {
    nom: string;
    prenom: string;
    age: number;

    constructor(nom: string, prenom: string, age: number) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }
}
   
export class Infirmier implements Personne {
    nom: string;
    prenom: string;
    age: number;

    constructor(nom: string, prenom: string, age: number) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }
   
    soigner(patient :Patient): void {
      console.log(`${this.nom} ${this.prenom} soigne le patient ${patient.nom}.`);
    }
}
   
export class Chirurgien implements Personne {
    nom: string;
    prenom: string;
    age: number;
    specialite: string;

    constructor(nom: string, prenom: string, age: number, specialite: string) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.specialite = specialite
    }
   
    operer(patient :Patient): void {
      console.log(`${this.nom} ${this.prenom} opère un patient en ${this.specialite}.`);
    }
}
   
export class Cardiologue implements Personne {
    nom: string;
    prenom: string;
    age: number;
    specialite: string;

    constructor(nom: string, prenom: string, age: number, specialite: string) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.specialite = specialite
    }
   
    ausculter(patient :Patient): void {
      console.log(`${this.nom} ${this.prenom} ausculte le patient ${patient.nom}.`);
    }
}
   
export class Anesthesiste implements Personne {
    nom: string;
    prenom: string;
    age: number;

    constructor(nom: string, prenom: string, age: number) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }
   
    anesthesier(patient :Patient): void {
      console.log(`${this.nom} ${this.prenom} anesthésie le patient ${patient.nom}.`);
    }
}
   
export class AgentEntretien implements Personne {
    nom: string;
    prenom: string;
    age: number;
    service: string;

    constructor(nom: string, prenom: string, age: number, service: string) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.service = service
    }
   
    nettoyer(): void {
      console.log(`${this.nom} ${this.prenom} nettoie le service ${this.service}.`);
    }
}
   
export class Cuisnier implements Personne {
    nom: string;
    prenom: string;
    age: number;

    constructor(nom: string, prenom: string, age: number) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
    }
   
    cuisiner(): void {
      console.log(`${this.nom} ${this.prenom} cuisine un repas.`);
    }
}
   
export class Secretaire implements Personne {
    nom: string;
    prenom: string;
    age: number;
    specialite: string;

    constructor(nom: string, prenom: string, age: number, specialite: string) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.specialite = specialite
    }
   
    prendreRendezVous(): void {
      console.log(`${this.nom} ${this.prenom} prend un rendez-vous en ${this.specialite}.`);
    }
  }