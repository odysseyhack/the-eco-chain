import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.scss']
})
export class FarmerDashboardComponent implements OnInit {
  constructor() {}

  public open: boolean;

  public ngOnInit(): void {}

  public openWizard(): void {
    this.open = true;
  }
}
