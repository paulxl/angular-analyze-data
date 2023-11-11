import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-d3',
  templateUrl: './pie-d3.component.html',
  styleUrls: ['./pie-d3.component.scss']
})
export class PieD3Component implements OnInit {
  private data = [
    { "team": "Redbull", "points": "25", "established": "2021" },
    { "team": "BlueAgave", "points": "54", "established": "2020" },
    { "team": "ApplePie", "points": "28", "established": "2022" },
    { "team": "Mango", "points": "33", "established": "2021" },
    { "team": "Pina", "points": "48", "established": "2020" },
    { "team": "Denver", "points": "37", "established": "2019" },
  ];

  private colors: any;
  private createColors(): void {
    this.colors = d3.scaleOrdinal()
      .domain(this.data.map(d => d.points.toString()))
      .range(["#d6eaf8", "#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }
  private svg: any;
  private margin = 50;
  private width = 750;
  private height = 600;
  // The radius of the pie chart is half the smallest side
  private radius = Math.min(this.width, this.height) / 2 - this.margin;

  private createSvg(): void {
    this.svg = d3.select("figure#pie")
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
  };

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.points));

    // Build the pie chart
    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(this.radius)
      )
      .attr('fill', (d: any, i: any) => (this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");

    // Add labels
    const labelLocation = d3.arc()
      .innerRadius(100)
      .outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.data))
      .enter()
      .append('text')
      .text((d: any) => d.data.team)
      .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
      .style("text-anchor", "middle")
      .style("font-size", 15);
  };

  ngOnInit(): void {
    this.createSvg();
    this.createColors();
    this.drawChart();
  }
}
