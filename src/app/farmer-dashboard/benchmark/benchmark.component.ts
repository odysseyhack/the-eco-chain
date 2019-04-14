import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';
@Component({selector: 'app-benchmark', templateUrl: './benchmark.component.html', styleUrls: ['./benchmark.component.scss']})
export class BenchmarkComponent implements OnInit, AfterViewInit {
  chart: Chart; stockChart: StockChart; hidden = false;
  toggle() {this.hidden = !this.hidden; }
  init() {
    this.chart = new Chart({chart: {type: 'line'}, // tslint:disable-next-line:max-line-length
    title: {text: 'CO2 Emissions projection'}, credits: {enabled: false}, series: [ {name: 'Line 1', data: [200, 250, 170, 190, 160, 155, 154, 140], type: 'line'}]});
    this.stockChart = new StockChart({
      rangeSelector: {selected: 1}, credits: { enabled: false}, series: [{ name: '', // tslint:disable-next-line:max-line-length
      data: [ [1482935400000, 120], [1483021800000, 118], [1483108200000, 125], [1483453800000, 130], [1483540200000, 123], [1483626600000, 119], [1483713000000, 117.91], [1483972200000, 118.99], [1484058600000, 119.11], [1484145000000, 119.75], [1484231400000, 119.25], [1484317800000, 119.04], [1484663400000, 120], [1484749800000, 119.99], [1484836200000, 119.78], [1482935400000, 120], [1483021800000, 118], [1483108200000, 125], [1483453800000, 130], [1483540200000, 123], [1483626600000, 119], [1483713000000, 117.91], [1483972200000, 118.99], [1484058600000, 119.11], [1484145000000, 119.75], [1484231400000, 119.25], [1484317800000, 119.04], [1484663400000, 120], [1484749800000, 119.99], [1484836200000, 119.78]], type: 'spline', tooltip: {valueDecimals: 2}}]}); }
  add() {this.chart.addPoint(Math.floor(Math.random() * 10)); }
  ngOnInit() {this.init(); this.chart.ref$.subscribe(chart => {}); }
  ngAfterViewInit() {this.chart.ref$.subscribe(chart => {}); }}
