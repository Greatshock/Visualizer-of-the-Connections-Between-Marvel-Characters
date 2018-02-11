import { Injectable } from '@angular/core';
import * as charactersByComics from "../../../../../database/characters_by_comics.json";

@Injectable()
export class DatabaseService {

  charactersByComics: any;

  constructor() {
    this.charactersByComics = charactersByComics;
  }

}
