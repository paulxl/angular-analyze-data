import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-scatter-d3',
  templateUrl: './scatter-d3.component.html',
  styleUrls: ['./scatter-d3.component.scss']
})
export class ScatterD3Component implements OnInit {
  private data = [
    { "team": "Redbull", "points": "25", "established": "2021" },
    { "team": "BlueAgave", "points": "54", "established": "2020" },
    { "team": "ApplePie", "points": "28", "established": "2022" },
    { "team": "Mango", "points": "33", "established": "2023" },
    { "team": "Pina", "points": "48", "established": "2018" },
    { "team": "Denver", "points": "37", "established": "2019" },
  ];

  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  };

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
      .domain([2018, 2023])
      .range([0, this.width]);
    // .ticks(6);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // var xaxis = d3.svg.axis()
    //   .scale(xscale)
    //   .orient("bottom")
    //   .ticks(5)
    // this.svg.append("g")
    //   .attr("class", "axis")
    //   .attr("transform", "translate(0," + (height - padding) + ")")
    //   .call(xaxis)

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 70])
      .range([this.height, 0]);
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.established))
      .attr("cy", (d: any) => y(d.points))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .text((d: any) => d.team)
      .attr("x", (d: any) => x(d.established))
      .attr("y", (d: any) => y(d.points))
  };

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  };

}
