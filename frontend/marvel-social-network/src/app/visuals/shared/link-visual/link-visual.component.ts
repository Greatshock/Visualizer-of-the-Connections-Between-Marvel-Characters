import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: 'app-link-visual',
  templateUrl: './link-visual.component.html',
  styleUrls: ['./link-visual.component.scss']
})

export class LinkVisualComponent  {
  @Input('linkVisual') link: Link;
}
