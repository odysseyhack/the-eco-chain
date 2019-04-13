import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  public constructor(private route: ActivatedRoute) {}

  public animal: string;

  public labels: Array<string> = ['Production', 'Packaging', 'Transport'];
  public cowData: Array<number> = [14, 4, 3];
  public chickenData: Array<number> = [8, 2, 1];
  public chartType = 'Pie';

  public columnTypes: any = [
    {
      type: 'string',
      value: 'subjectName'
    },
    {
      type: 'number',
      value: 'Marks'
    }
  ];

  public options: any = {
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

  public ngOnInit(): void {
    this.animalChoice();
  }

  public animalChoice(): void {
    this.animal = this.route.snapshot.paramMap.get('id');

  }
}
