import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-farmer-dashboard",
  templateUrl: "./farmer-dashboard.component.html",
  styleUrls: ["./farmer-dashboard.component.scss"]
})
export class FarmerDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  questions = [
    { label: "Production system" },
    { label: "Organic or conventional farm" },
    { label: "Start of reference period" }
  ];

  model() {}
}
