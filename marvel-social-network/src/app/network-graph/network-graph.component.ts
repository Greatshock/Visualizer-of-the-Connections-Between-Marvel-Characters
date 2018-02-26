import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';
import * as nodes from '../../../../database/characters_for_nodes.json';
import * as links from '../../../../database/links_between_characters.json';
import { D3, D3Service, Selection } from "d3-ng2-service";
import { D3ZoomEvent } from "d3-zoom";

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent implements OnInit, OnChanges, OnDestroy {

  @Input() width: number = 1000;
  @Input() height: number = 600;
  @Input() pointRadius: number = 5;

  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private d3G: Selection<SVGGElement, any, null, undefined>;
  private simulation: any;
  private nodes: any;
  private links: any;
  private points: any;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
    this.nodes = nodes;
    //this.links = links;
    this.links = [
        {
          "source": 1009220,
          "target": 1010776,
          "linkType": "appearInOneComic"
        },
        {
          "source": 1009220,
          "target": 1009378,
          "linkType": "appearInOneComic"
        },
        {
          "source": 1009220,
          "target": 1010363,
          "linkType": "appearInOneComic"
        },
        {
          "source": 1009220,
          "target": 1009215,
          "linkType": "appearInOneComic"
        },
        {
          "source": 1009220,
          "target": 1009471,
          "linkType": "appearInOneComic"
        },
        {
          "source": 1009220,
          "target": 1009718,
          "linkType": "appearInOneComic"
        }
      ];
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (
      (changes['width'] && !changes['width'].isFirstChange()) ||
      (changes['height'] && !changes['height'].isFirstChange()) ||
      (changes['pointRadius'] && !changes['pointRadius'].isFirstChange())
    ) {
      if (this.d3Svg.empty && !this.d3Svg.empty()) {
        this.changeLayout();
      }
    }

  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;

    function zoomed(this: SVGSVGElement) {
      let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
      d3G.attr('transform', e.transform.toString());
    }

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
      this.d3Svg.attr('width', this.width);
      this.d3Svg.attr('height', this.height);
      this.d3Svg.call(d3.zoom<SVGSVGElement, any>()
        .scaleExtent([1 / 2, 8])
        .on('zoom', zoomed));

      d3G = this.d3G = this.d3Svg.append<SVGGElement>('g');

      // Add links data
      let link = d3G.append<SVGGElement>('g')
                    .attr('class', 'links')
                    .selectAll('line')
                    .data(this.links).enter()
                    .append('line')
                    .attr('stroke-width', 1.5)
                    .attr('stroke', 'black');

      // Add nodes data
      let focusNode: any;
      let highlightedLinks: any;
      let node = d3G.append<SVGGElement>('g')
                    .attr('class', 'nodes')
                    .selectAll<SVGCircleElement, any>('circle')
                    .data(this.nodes).enter()
                    .append<SVGCircleElement>('circle')
                    .attr('cx', function (d: any) { return d.x; })
                    .attr('cy', function (d: any) { return d.y; })
                    .attr('r', this.pointRadius)
                    .attr('fill', 'red')
                    .attr('fill', 'red')
                    .attr('stroke', 'black')
                    .attr('stroke-width', '1.5px')
                     // .on('mouseover', function(d: any) {
                     //
                     // })
                     // .on('mouseout', function() {
                     //
                     // })
                     .on('click', function(thisNode: any) {
                       if (highlightedLinks != null)
                         highlightedLinks.style('stroke', 'black');

                       if (focusNode != null) {
                         focusNode.style('stroke', 'black');
                       }

                       focusNode = d3.select(this);
                       focusNode.style('stroke', 'blue');
                       highlightedLinks = d3.selectAll('line').filter(function(d: any) {
                         return (d.source === thisNode) || (d.target === thisNode);
                       }).style('stroke', 'blue');
                     });

      let dragHandler = d3.drag()
        .on('start', (d: any) => {
          if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (d: any) => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        })
        .on('end', (d: any) => {
          if (!d3.event.active) this.simulation.alphaTarget(0);
          d.fx = d.x;
          d.fy = d.y;
        });
      dragHandler(node);

      // Set up the simulation
      this.simulation = d3.forceSimulation().nodes(this.nodes);
      // Add forces
      this.simulation.force('charge-force', d3.forceManyBody())
                .force('center_force', d3.forceCenter(this.width / 2, this.height / 2))
                .force('links', d3.forceLink(this.links).id((d: any) => {
                  return d.id;
                }))
                // Update positions of the circles and links
                .on('tick', () => {
                  link
                    .attr("x1", function(d: any) { return d.source.x; })
                    .attr("y1", function(d: any) { return d.source.y; })
                    .attr("x2", function(d: any) { return d.target.x; })
                    .attr("y2", function(d: any) { return d.target.y; });

                  node
                    .attr("cx", function(d: any) { return d.x; })
                    .attr("cy", function(d: any) { return d.y; });
                });
    }

  }

  private changeLayout() {
    this.d3Svg
      .attr('width', this.width)
      .attr('height', this.height);

    this.d3G.selectAll<SVGCircleElement, any>('circle')
      .data(this.points)
      .attr('cx', function (d: any) { return d.x; })
      .attr('cy', function (d: any) { return d.y; })
      .attr('r', this.pointRadius);

  }

  getNodesAndLinks() {
    this.nodes = nodes;
    this.links = links;

    // if (!(nodes instanceof Array) || !(links instanceof Array)) {
    //   return;
    // }

    // const numberOfNodes = nodes.length,
    //  numberOfLinks = links.length;

    // Constructing the nodes array
    // for (let i = 0; i < numberOfNodes; i++) {
      // noinspection JSUnfilteredForInLoop
      // this.nodes.push(new Node(nodes[i]))
    // }

    // for (let i = 0; i < numberOfLinks; i+=1) {
    //   let link = links[i];
    //   this.links.push(new Link(link['source'], link['target'], link['linkType']));
    // }
  }
}
