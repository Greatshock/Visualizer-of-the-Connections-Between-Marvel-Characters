import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';
import {
  D3Service,
  D3,
  Selection
} from 'd3-ng2-service';
import {Node} from "./models/node";
import {Character} from "../shared/models/character";
import {Link} from "./models/link";

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent implements OnInit {

  private d3: D3; // Holds d3 reference
  private parentNativeElement: any;

  options = {
    width: window.innerWidth,
    height: window.innerHeight - 150
  };

  constructor(element: ElementRef, private d3Service: D3Service, private dbService: DatabaseService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit(): void {

    // Add svg to the graph area
    let d3 = this.d3;
    let graphAreaDiv = document.getElementById('graphArea');
    let svg = d3.select(graphAreaDiv).append<SVGSVGElement>('svg');
    let width = graphAreaDiv.clientWidth;
    let height = graphAreaDiv.clientHeight;
    svg
      .attr('width', width)
      .attr('height', height);

    // Get nodes and add them to svg
    let nodes_data: Node[] = [];
    let spiderman = new Character();
    spiderman.id = 0;
    spiderman.description = "";
    spiderman.name = "Peter Parker";
    spiderman.sex = "Male";
    nodes_data.push(new Node(spiderman));
    nodes_data.push(new Node(spiderman));
    nodes_data.push(new Node(spiderman));

    let node = svg.selectAll("g")
      .data(nodes_data).enter()
      .append("g");

    node.append("circle")
      .attr("r", 10)
      .style("fill", 'red');

    node.append("text")
      .attr("x", 12)
      .attr("dy", ".35em")
      .text(function (d) { return d.character.name; });

    // Create simulation
    let simulation = d3.forceSimulation()
      .nodes(nodes_data)
      .force('charge_force', d3.forceManyBody())
      .force('center_force', d3.forceCenter(graphAreaDiv.clientWidth / 2, graphAreaDiv.clientHeight / 2))
      .on('tick', () => {
        // Update circle positions to reflect node updates on each tick of the simulation
        node
          .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")"
          });
      });

  }

}
