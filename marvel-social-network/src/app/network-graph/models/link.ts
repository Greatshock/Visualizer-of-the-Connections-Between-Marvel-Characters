import {Node} from "./node";

export class Link {
  source: any;
  target: any;

  constructor(source: Node, target: Node) {
    this.source = source;
    this.target = target;
  }
}
