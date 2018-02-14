import { Injectable } from '@angular/core';
import characters from './characters.json';

@Injectable()
export class DatabaseService {

  characters: any;

  constructor() {
    this.characters = characters;
    console.log(this.characters);
  }

}
