import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public constructor() {}

  public labels = ['Local pasture', 'Imported', 'Other'];
  data = [12, 14, 25];

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
    hAxis: {
      title: 'Subject'
    },
    vAxis: {
      title: 'Marks'
    }
  };

  public ngOnInit(): void {}
}
