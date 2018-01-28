import { Component, Input, OnInit } from '@angular/core';
import { Node } from '../../../d3';

@Component({
  selector: '[app-node-visual]',
  templateUrl: './node-visual.component.html',
  styleUrls: ['./node-visual.component.scss']
})

export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
}
