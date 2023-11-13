import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import * as d3 from 'd3';

@Component({
  selector: 'app-randomness',
  templateUrl: './randomness.component.html',
  styleUrls: ['./randomness.component.scss']
})
export class RandomnessComponent implements OnInit {

  testNumber: number = 1000;

  zeroTimes = { "spot": "0", "qty": 0 };
  oneTimes = { "spot": "1", "qty": 0 };
  twoTimes = { "spot": "2", "qty": 0 };
  threeTimes = { "spot": "3", "qty": 0 };
  fourTimes = { "spot": "4", "qty": 0 };
  fiveTimes = { "spot": "5", "qty": 0 };
  sixTimes = { "spot": "6", "qty": 0 };
  sevenTimes = { "spot": "7", "qty": 0 };
  eightTimes = { "spot": "8", "qty": 0 };
  nineTimes = { "spot": "9", "qty": 0 };

  dataArray = [this.zeroTimes, this.oneTimes, this.twoTimes, this.threeTimes, this.fourTimes, this.fiveTimes, this.sixTimes, this.sevenTimes, this.eightTimes, this.nineTimes];

  maxGraphNumber: number = 0;
  minGraphNumber: number = 0;
  graphRangeNumber: number = 0;
  domainHigh: number = 0;
  domainLow: number = 0;

  // set the dimensions & margins of the graph
  margin = { top: 30, right: 30, bottom: 70, left: 60 };
  grfWidth = 690 - this.margin.left - this.margin.right;
  grfHeight = 600 - this.margin.top - this.margin.bottom;

  // collecting the data
  callSwitch(input: number) {
    switch (input) {
      case 0:
        this.zeroTimes.qty++;
        break;
      case 1:
        this.oneTimes.qty++;
        break;
      case 2:
        this.twoTimes.qty++;
        break;
      case 3:
        this.threeTimes.qty++;
        break;
      case 4:
        this.fourTimes.qty++;
        break;
      case 5:
        this.fiveTimes.qty++;
        break;
      case 6:
        this.sixTimes.qty++;
        break;
      case 7:
        this.sevenTimes.qty++;
        break;
      case 8:
        this.eightTimes.qty++;
        break;
      case 9:
        this.nineTimes.qty++;
        break;
      default:
        console.log("error in swith statement");
    };
  }

  findMaxMin() {
    this.maxGraphNumber = _.max([this.zeroTimes.qty, this.oneTimes.qty, this.twoTimes.qty, this.threeTimes.qty, this.fourTimes.qty, this.fiveTimes.qty, this.sixTimes.qty, this.sevenTimes.qty, this.eightTimes.qty, this.nineTimes.qty])!;

    this.minGraphNumber = _.min([this.zeroTimes.qty, this.oneTimes.qty, this.twoTimes.qty, this.threeTimes.qty, this.fourTimes.qty, this.fiveTimes.qty, this.sixTimes.qty, this.sevenTimes.qty, this.eightTimes.qty, this.nineTimes.qty])!;

    this.workData();
  }

  workData() {
    this.graphRangeNumber = this.maxGraphNumber - this.minGraphNumber;
    this.domainHigh = this.maxGraphNumber + 10;
    this.domainLow = this.minGraphNumber - 10;
    this.buildGraph();
  }

  buildGraph() {
    let height = this.grfHeight; // so that later the svg.selectAll function can properly process info

    // assist in creating an ordered list for the bar graph
    this.dataArray.sort(function (b, a) {
      return a.qty - b.qty;
    });

    // append the svg object to the body of the page
    const svg = d3.select("#bar")
      .append("svg")
      .attr("width", this.grfWidth + this.margin.left + this.margin.right)
      .attr("height", this.grfHeight + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")");
    // X axis
    let x = d3.scaleBand()
      .range([0, this.grfWidth])
      .domain(this.dataArray.map(function (d) { return d.spot }))
      .padding(0.2);
    svg.append("g")
      .attr("transform", "translate(0," + this.grfHeight + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10, 0)rotate(-45)")
      .style("text-anchor", "end");

    // Y axis
    let y = d3.scaleLinear()
      .domain([this.domainLow, this.domainHigh])
      .range([this.grfHeight, 0]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
      .data(this.dataArray)
      .enter()
      .append("rect")
      .attr("x", function (d) { return x(d.spot)!; })
      .attr("y", function (d) { return y(d.qty) })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return height - y(d.qty); })
      .attr("fill", "#69b3a2")
  }

  ngOnInit(): void {
    for (let i = 0; i < this.testNumber; i++) {
      let n1: number = Math.floor(Math.random() * 10);
      this.callSwitch(n1);
    };
    this.findMaxMin();
  }
}
