import { Component } from '@angular/core';
import GRAPH_CONFIG from './network-graph-config';
import { Node, Link } from './d3';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent {

  nodes: Node[] = [];
  links: Link[] = [];

  constructor(private dbService: DatabaseService) {

    // const N = GRAPH_CONFIG.N;
    const getIndex = number => number - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= 5; i++) {
      this.nodes.push(new Node(i));
    }

    for (let i = 1; i <= 3; i++) {
      for (let m = 2; i * m <= 5; m++) {
        /** increasing connections toll on connecting nodes */
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(i, i * m));
      }
    }
  }

}
