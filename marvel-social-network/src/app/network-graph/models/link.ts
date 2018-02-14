import {Node} from "./node";

export class Link {
  source: Node;
  target: Node;
  type: string;

  constructor(source: Node, target: Node, type: string) {
    this.source = source;
    this.target = target;
    this.type = type;
  }
}
