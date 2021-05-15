import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: "Deadpool", edad: 20, tippoder: 'Fuerza, batalla cuerpo a cuerpo, regeneración.',
      identidad: 'Wade Wilson', universo: 'Marvel'},

      {id: 12, name: "Jessica Jones", edad: 28,tippoder: 'Fuerza, habilidades de agente.', 
      identidad: 'Jessica Jones', universo: 'Marvel'},

      {id: 13, name: "Ghost Rider",edad: 30, tippoder: 'Fuerza, fuego, resurección', identidad: 'Johnny Blaze',
      universo: 'Marvel'},

      {id: 14, name: "The Punisher", edad: 30, tippoder: 'Fuerza y batallas cuerpo a cuerpo', 
      identidad: 'Frank Castle', universo: 'Marvel'},

      {id: 15, name: "Venom", edad: 40, tippoder: 'Fuerza y adherirse a cualquier cuerpo',
      identidad: 'Eddie Brock', universo: 'Marvel'},

      {id: 16, name: "Deathstroke", edad: 25, tippoder: 'Fuerza, velocidad, estratega, entre otros.',
      identidad: 'Slade Wilson', universo: 'DC'},

      {id: 17, name: "Wolverine", edad: 1000, tippoder: 'Fuerza, batalla cuerpo a cuerpo y mutante.',
      identidad: 'James Howlett',universo: 'DC'},

      {id: 18, name: "Black Widow", edad: 28, tippoder: 'Fuerza, salto a gran distancia.',
      identidad: 'Natasha Romanoff', universo: 'Marvel'},

      {id: 19, name: "Scarlet Witch", 
      edad: 36,tippoder: 'Magia, control de tiempo, clarividencia, entre otros.',identidad: 'Wanda Maximoff',
      universo: 'Marvel'},

      {id: 20, name: "Domino", 
      edad: 30, tippoder: 'Suerte', identidad: 'Neena Thurman', universo: 'Marvel'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/