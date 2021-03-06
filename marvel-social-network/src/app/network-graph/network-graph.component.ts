import {Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as nodes from '../../../../database/characters_for_nodes.json';
import * as links from '../../../../database/links_between_characters.json';
import {D3, D3Service, Selection} from "d3-ng2-service";
import {D3ZoomEvent} from "d3-zoom";
import {Observable} from "rxjs/Observable";
import {Char} from "../shared/interfaces";
import {startWith, map} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {MatRadioChange, MatSnackBar} from "@angular/material";
import {citizenships, colorizationSchemes, races, filterColors, maxLinksCount} from "../shared/filters-data/filters-data";

@Component({
  selector: 'app-network-graph',
  templateUrl: './network-graph.component.html',
  styleUrls: ['./network-graph.component.scss']
})
export class NetworkGraphComponent implements OnInit, OnDestroy {

  chars: Char[] = [];
  races = races;
  citizenships = citizenships;
  colorizationSchemes = colorizationSchemes;
  characterSearchValue = '';
  raceSearchValue = '';
  citizenshipSearchValue = '';
  colorizationMethod = this.colorizationSchemes[5];
  showFilteredResults = false;
  filteredResults = [];
  currentFilters = {
    gender: {
      males: true,
      females: true,
      genderfluid: true,
      agender: true,
      na: true
    },
    citizenship: '',
    race: '',
    orientation: {
      straight: true,
      gay: true,
      lesbian: true,
      bisexual: true,
      pansexual: true,
      na: true
    }
  };

  filteredChars: Observable<Char[]>;
  filteredRaces: Observable<string[]>;
  filteredCitizenships: Observable<string[]>;

  charsControl: FormControl = new FormControl();
  racesControl: FormControl = new FormControl();
  citizenshipsControl: FormControl = new FormControl();

  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
  private d3G: Selection<SVGGElement, any, null, undefined>;
  private simulation: any;
  private nodes: any;
  private links: any;
  private zoom: any;
  private lastSearchedNode: any;
  private options: { width, height, pointRadius } = {
    width: window.innerWidth,
    height: window.innerHeight - 172,
    pointRadius: 5
  };

  private allLines: any;
  private allCircles: any;

  constructor(element: ElementRef, d3Service: D3Service, public snackBar: MatSnackBar) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
    this.nodes = nodes;
    this.links = [];

    let l: any = links;
    for (let i = 0; i < l.length; i += 20) {
      this.links.push(l[i]);
    }

    for (let i = 0; i < this.nodes.length; i++) {
      this.chars.push({
        id: this.nodes[i].id,
        name: this.nodes[i].name
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'custom-snackbar'
    });
  }

  ngOnDestroy() {
    if (this.d3Svg.empty && !this.d3Svg.empty()) {
      this.d3Svg.selectAll('*').remove();
    }
  }

  colorizationOnChange(event: MatRadioChange) {
    this.colorizationMethod = event.value;
    switch (this.colorizationMethod) {
      case 'Gender':
        this.allCircles.style('fill', (d: any) => {
          return filterColors.Gender[d.gender];
        });
        break;
      case 'Citizenship':
        this.allCircles.style('fill', (d: any) => {
          return filterColors.Citizenship[d.citizenship];
        });
        break;
      case 'Race':
        this.allCircles.style('fill', (d: any) => {
          return filterColors.Race[d.race];
        });
        break;
      case 'Homophily':
        this.openSnackBar('Click a character to compare with', 'OK');
        break;
      case 'Centrality':
        this.allCircles.style('fill', (d: any) => {
          // Calculate hue which may vary between red and blue (0 - 240)
          let hue = 240 * d.linksCount / maxLinksCount;
          return `hsl(${hue}, 100%, 50%)`;
        });
        break;
      default:
        this.allCircles.style('fill', 'red');
    }
  }

  findNode(name: string) {

    if (this.lastSearchedNode) {
      this.lastSearchedNode.style('stroke', 'black').style('stroke-width', '2.5px')
    }

    let x = 0,
        y = 0;
    this.lastSearchedNode = this.d3Svg.selectAll('circle').filter((d: any) => {
      if (d.name == name) {
        x = d.x;
        y = d.y;
      }

      return d.name == name;
    });

    this.d3Svg.transition()
                .duration(750)
                .call(this.zoom.transform, this.d3.zoomIdentity.translate(
                  this.options.width / 2 - x, this.options.height / 2 - y
                ));

    this.lastSearchedNode.style('stroke', 'blue').style('stroke-width', '5px');
  }

  filterNodesAndLinks() {
    this.showFilteredResults = false;
    this.filteredResults = [];
    this.allLines.style('opacity', .2);
    this.allCircles.style('opacity', .2);
    let circlesToShow: any;

    // Check if we need to filter by citizenship
    if (this.currentFilters.citizenship != '' && this.currentFilters.citizenship != 'All') {
      circlesToShow = this.allCircles.filter((d: any) => {
        return d.citizenship == this.currentFilters.citizenship;
      });
    }

    // Check if we need to filter by race
    if (this.currentFilters.race != '' && this.currentFilters.race != 'All') {
      if (circlesToShow) {
        circlesToShow = circlesToShow.filter((d: any) => {
          return d.race == this.currentFilters.race;
        });
      } else {
        circlesToShow = this.allCircles.filter((d: any) => {
          return d.race == this.currentFilters.race;
        });
      }
    }

    // Check if we need to filter by gender
    let checkedGenders = [];
    if (this.currentFilters.gender.males) checkedGenders.push('Male');
    if (this.currentFilters.gender.females) checkedGenders.push('Female');
    if (this.currentFilters.gender.agender) checkedGenders.push('Agender');
    if (this.currentFilters.gender.genderfluid) checkedGenders.push('Genderfluid');
    if (this.currentFilters.gender.na) checkedGenders.push('N/A');
    if (checkedGenders.length != 5) { // Not all genders checked
      if (circlesToShow) {
        circlesToShow = circlesToShow.filter((d: any) => {
          return checkedGenders.indexOf(d.gender) > -1;
        });
      } else {
        circlesToShow = this.allCircles.filter((d: any) => {
          return checkedGenders.indexOf(d.gender) > -1;
        });
      }
    }

    // Check if we need to filter by orientation
    let checkedOrientations = [];
    if (this.currentFilters.orientation.straight) checkedOrientations.push('Straight');
    if (this.currentFilters.orientation.lesbian) checkedOrientations.push('Lesbian');
    if (this.currentFilters.orientation.gay) checkedOrientations.push('Gay');
    if (this.currentFilters.orientation.bisexual) checkedOrientations.push('Bisexual');
    if (this.currentFilters.orientation.pansexual) checkedOrientations.push('Pansexual');
    if (this.currentFilters.orientation.na) checkedOrientations.push('N/A');
    if (checkedOrientations.length != 6) { // Not all genders checked
      if (circlesToShow) {
        circlesToShow = circlesToShow.filter((d: any) => {
          return checkedOrientations.indexOf(d.orientation) > -1;
        });
      } else {
        circlesToShow = this.allCircles.filter((d: any) => {
          return checkedOrientations.indexOf(d.orientation) > -1;
        });
      }
    }

    if (circlesToShow) {
      // Show filtered nodes
      circlesToShow.style('opacity', 1);

      // Show filtered links
      let idsOfNodesToShow = [];
      circlesToShow.each((d: any) => idsOfNodesToShow.push(d.id));
      this.allLines.filter((d: any) => {
        return (idsOfNodesToShow.indexOf(d.source.id) > -1) || (idsOfNodesToShow.indexOf(d.target.id) > -1);
      }).style('opacity', 1);

      // Show filtered results
      if (circlesToShow._groups[0].length < 50) {
        circlesToShow.each((d: any) => {
          this.filteredResults.push(d);
          this.showFilteredResults = true;
        })
      }

      if (circlesToShow._groups[0].length == 0) {
        this.openSnackBar('No matches!', 'OK');
      }
    } else {
      this.allCircles.style('opacity', 1);
      this.allLines.style('opacity', 1);
    }
  }

  applyCitizenshipFilter(citizenship: string) {
    this.currentFilters.citizenship = citizenship;
    this.filterNodesAndLinks();
  }

  applyRaceFilter(race: string) {
    this.currentFilters.race = race;
    this.filterNodesAndLinks();
  }

  filterCharacters(val: string): Char[] {
    return this.chars.filter(char =>
      char.name.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

  filterRaces(val: string): string[] {
    return this.races.filter(race =>
      race.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

  filterCitizenships(val: string): string[] {
    return this.citizenships.filter(citizenship =>
      citizenship.toLowerCase().indexOf(val.toLowerCase()) !== -1);
  }

  ngOnInit() {
    this.filteredChars = this.charsControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filterCharacters(val))
    );
    this.filteredRaces = this.racesControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filterRaces(val))
    );
    this.filteredCitizenships = this.citizenshipsControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filterCitizenships(val))
    );

    let d3 = this.d3;
    let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
    let d3G: Selection<SVGGElement, any, null, undefined>;
    let focusNode: any;
    let highlightedLinks: any;
    let infoBox: any;

    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement);

      this.zoom = this.d3.zoom()
        .scaleExtent([0.01, 10])
        .on('zoom', zoomed);

      this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg')
                                  .attr('width', this.options.width)
                                  .attr('height', this.options.height)
                                  .call(this.zoom);

      // Hide info box on click on the empty space
      this.d3Svg.on('click', function () {
        if (infoBox) infoBox.remove();
      });
      let svg = this.d3Svg;

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
      let node = d3G.append<SVGGElement>('g')
        .attr('class', 'nodes')
        .selectAll<SVGCircleElement, any>('circle')
        .data(this.nodes).enter()
        .append<SVGCircleElement>('circle')
        .attr('cx', function (d: any) {
          return d.x;
        })
        .attr('cy', function (d: any) {
          return d.y;
        })
        .attr('r', function(d: any) {
            let rMax = 100,
                rMin = 20;
          return rMin + d.linksCount * (rMax - rMin) / maxLinksCount;
        })
        .attr('fill', 'red')
        .attr('fill', 'red')
        .attr('stroke', 'black')
        .attr('stroke-width', '2.5px')
        .style('cursor', 'pointer')
        .on('mouseover', function (thisNode: any) {
          focusNode = d3.select(this);
          focusNode.style('stroke', 'blue').style('stroke-width', '5px');
          highlightedLinks = d3.selectAll('line').filter(function (d: any) {
            return (d.source === thisNode) || (d.target === thisNode);
          }).style('stroke', 'blue').style('stroke-width', '5px');
        })
        .on('mouseout', function () {
          if (highlightedLinks != null)
            highlightedLinks.style('stroke', 'black').style('stroke-width', '1.5px');

          if (focusNode != null) {
            focusNode.style('stroke', 'black').style('stroke-width', '2.5px');
          }
        })
        .on('click', (d: any) => {
          if (this.colorizationMethod == 'Homophily') {
            this.openSnackBar('Dark blue <=> max similarities. Red <=> no similarities', 'OK');
            this.allCircles.style('fill', (theNode: any) => {
              // Calculate similarities
              let similarities = 0;
              if (theNode.citizenship == d.citizenship) similarities++;
              if (theNode.race == d.race) similarities++;
              if (theNode.orientation == d.orientation) similarities++;
              if (theNode.gender == d.gender) similarities++;

              // Colorize according to number of similarities
              let hue = 240 * similarities / 4;
              return  `hsl(${hue}, 100%, 50%)`;
            });
          }

          d3.event.stopPropagation();

          if (infoBox) infoBox.remove();

          infoBox = d3G.append('g')
            .attr("transform", "translate(" + (d.x + 5.5) + "," + (d.y + 5.5) + ")");

          let rect = infoBox.append("rect")
            .style("fill", "white")
            .style("stroke", "steelblue");

          const k = d3.zoomTransform(svg.node()).k;
          let fontSize;
          if (k > 0.6) fontSize = 16;
          else if (k < 0.6 && k > 0.3) fontSize = 25;
          else fontSize = 100;

          infoBox.append("text")
            .text(d.name)
            .attr("dy", "1em")
            .attr("x", 5)
            .style('font-weight', 'bold')
            .style('font-size', fontSize);
          infoBox.append("text")
            .text('Gender: ' + d.gender)
            .attr("dy", "3em")
            .attr("x", 5)
            .style('font-size', fontSize);
          infoBox.append("text")
            .text('Citizenship: ' + d.citizenship)
            .attr("dy", "4em")
            .attr("x", 5)
            .style('font-size', fontSize);
          infoBox.append("text")
            .text('Race: ' + d.race)
            .attr("dy", "5em")
            .attr("x", 5)
            .style('font-size', fontSize);
          infoBox.append("text")
            .text('Orientation: ' + d.orientation)
            .attr("dy", "6em")
            .attr("x", 5)
            .style('font-size', fontSize);

          infoBox//.append("a")
            //.attr('xlink:href', d.wikiUrl)
            .append('text')
            .text(function() {
              if (d.wikiUrl != '') return 'click for more info';
            })
            .on('click', function() {
              window.open(d.wikiUrl);
            })
            .attr("dy", "8em")
            .attr("x", 5)
            .style('cursor', 'pointer')
            .style('font-size', fontSize)
            .style('font-style', 'italic')
            .style('fill', 'blue');

          let bBox = infoBox.node().getBBox();
          rect.attr("width", bBox.width + 30)
            .attr("height", bBox.height + 5);
        });

      let dragHandler = d3.drag()
        .on('start', (d: any) => {
          if (!d3.event.active) this.simulation.alphaTarget(0.01).restart();
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

      // Set initial zoom level
      this.zoom.scaleTo(svg, .1);

      // Set up the simulation
      this.simulation = d3.forceSimulation().nodes(this.nodes);
      // Add forces
      this.simulation.force('charge-force', d3.forceManyBody().strength(-3200))
        .force('center_force', d3.forceCenter(this.options.width / 2, this.options.height / 2))
        //.force('collision_force', d3.forceCollide().strength())
        .force('links', d3.forceLink(this.links).id((d: any) => {
          return d.id;
        }).strength(.02))
        // Update positions of the circles and links
        .on('tick', () => {
          link
            .attr("x1", function (d: any) {
              return d.source.x;
            })
            .attr("y1", function (d: any) {
              return d.source.y;
            })
            .attr("x2", function (d: any) {
              return d.target.x;
            })
            .attr("y2", function (d: any) {
              return d.target.y;
            });

          node
            .attr("cx", function (d: any) {
              return d.x;
            })
            .attr("cy", function (d: any) {
              return d.y;
            });
        });

      d3.select(window).on('resize', function () {
        let width = window.innerWidth,
            height = window.innerHeight - 172;
        d3.select('svg').attr('width', width).attr('height', height);
      });
    }

    this.allCircles = this.d3Svg.selectAll('circle');
    this.allLines = this.d3Svg.selectAll('line');

    function zoomed(this: SVGSVGElement) {
      let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
      d3G.attr('transform', e.transform.toString());
    }
  }

  getNodesAndLinks() {
    // this.nodes = nodes;
    // this.links = links;

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
