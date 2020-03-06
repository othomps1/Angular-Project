import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Michael Jordan' },
      { id: 12, name: 'LeBron James' },
      { id: 13, name: 'Bill Russell' },
      { id: 14, name: 'Wilt Chamberlain' },
      { id: 15, name: 'Kareem Abdul-Jabbar' },
      { id: 16, name: 'Magic Johnson' },
      { id: 17, name: 'Larry Bird' },
      { id: 18, name: 'Shaquille Oneal' },
      { id: 19, name: 'Hakeem Olajuwon' },
      { id: 20, name: 'Tim Duncan' }
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