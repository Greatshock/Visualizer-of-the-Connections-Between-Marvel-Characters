import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { DatabaseService } from '../shared/services/database.service';
import {
  D3Service,
  D3,
  Selection
} from 'd3-ng2-service';

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
    let svg = d3.select(graphAreaDiv).append('svg');

    // Enable svg auto resizing
    function redraw() {
      let width = graphAreaDiv.clientWidth;
      let height = graphAreaDiv.clientHeight;
      svg
        .attr('width', width)
        .attr('height', height);
    }
    redraw();
    window.addEventListener('resize', redraw);

  }

}
