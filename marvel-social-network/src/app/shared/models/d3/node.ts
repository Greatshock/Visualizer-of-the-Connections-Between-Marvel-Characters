import { Character } from "../../interfaces";

const CONFIG = {
  N : 1491,
  SPECTRUM: [
    // "rgb(222,237,250)"
    "rgb(176,212,243)",
    "rgb(128,186,236)",
    "rgb(77,158,228)",
    "rgb(38,137,223)",
    "rgb(0,116,217)",
    "rgb(0,106,197)"
    // "rgb(0,94,176)"
    // "rgb(0,82,154)"
    // "rgb(0,60,113)"
  ]
};

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: number;
  linksCount: number;
  character: Character;

  constructor(character: Character) {
    this.character = character;
    this.linksCount = character.linksCount;
    this.id = character.id;
  }

  normal = () => {
    return Math.sqrt(this.linksCount / CONFIG.N);
  };

  get r() {
    return 50 * this.normal() + 10;
  }

  get fontSize() {
    return (30 * this.normal() + 10) + 'px';
  }

  get color() {
    let index = Math.floor(CONFIG.SPECTRUM.length * this.normal());
    return CONFIG.SPECTRUM[index];
  }
}
