import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public constructor() {}

  public labels = ['Production', 'Packaging', 'Transport'];
  data = [14, 4, 3];

  columnTypes = [
    {
      type: 'string',
      value: 'subjectName'
    },
    {
      type: 'number',
      value: 'Marks'
    }
  ];

  chartType = 'Pie';

  options = {
    height: 300,
    bars: 'vertical',
    legend: { position: 'bottom', textStyle: { fontSize: 10 } },
    hAxis: {
      title: 'Subject'
    },
    vAxis: {
      title: 'Marks'
    }
  };

  public ngOnInit(): void {}
}
