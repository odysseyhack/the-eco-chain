import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  questions = [
    { label: "Production system" },
    { label: "Organic or conventional farm" },
    { label: "Start of reference period" }
  ];
}
