import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-d3',
  templateUrl: './bar-d3.component.html',
  styleUrls: ['./bar-d3.component.scss']
})
export class BarD3Component implements OnInit {
  private data = [
    { "team": "Redbull", "points": "25", "established": "2021" },
    { "team": "BlueAgave", "points": "54", "established": "2020" },
    { "team": "ApplePie", "points": "28", "established": "2022" },
    { "team": "Mango", "points": "33", "established": "2021" },
    { "team": "Pina", "points": "48", "established": "2020" },
    { "team": "Denver", "points": "37", "established": "2019" },
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  };

  // create method to draw bars
  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.team))
      .padding(0.2);

    // Draw the X-axis on the DOM
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
      .domain([0, 70])
      .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
      .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.team))
      .attr("y", (d: any) => y(d.points))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.points))
      .attr("fill", "#d04a35");
  };

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  };
}
