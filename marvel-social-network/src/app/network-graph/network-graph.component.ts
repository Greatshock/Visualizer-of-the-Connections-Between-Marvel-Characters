import { Component } from '@angular/core';
import { Link, Node } from "../shared/models/d3";
import * as nodes from '../../../../database/characters_for_nodes.json';
import * as links from '../../../../database/links_between_characters.json';

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {

    if (!(nodes instanceof Array) || !(links instanceof Array)) {
      return;
    }

    const numberOfNodes = nodes.length,
          numberOfLinks = links.length;

    // Constructing the nodes array
    for (let i = 0; i < numberOfNodes; i++) {
      // noinspection JSUnfilteredForInLoop
      this.nodes.push(new Node(nodes[i]))
    }

    // TODO delete the wrong range: replace with numberOfLinks
    console.log(links[0]);
    for (let i = 0; i < 5; i++) {
      let link = links[i];
      this.links.push(new Link(link['source'], link['target'], link['linkType']));
    }

  }
}
