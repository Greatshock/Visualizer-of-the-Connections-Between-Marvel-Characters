import { Character } from '../../shared/models/character'

export class Node {
  character: Character;
  x: any;
  y: any;

  constructor(character: Character) {
    this.character = character;
  }
}
