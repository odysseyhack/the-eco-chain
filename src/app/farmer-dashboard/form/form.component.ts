import { Component, OnInit, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  constructor() {}

  @ViewChild("wizardmd") wizardMedium: ClrWizard;
  // tslint:disable-next-line:variable-name
  private _open = false;

  public questions: object = {
    crop: [
      {
        name: "1.1 Basics",
        fields: [
          { label: "Product ID", value: "wheat:field-5:fall2019" },
          { label: "Crop name", value: "wheat" },
          { label: "Harvest year", value: "2019" },
          { label: "Crop Area", value: "20 ha" },
          { label: "Net Yield", value: "90 tonnes" }
        ]
      },
      {
        name: "1.2 Crop residue management",
        description:
          // tslint:disable-next-line:max-line-length
          "Default values for dry matter weights are provided for most crops. If you have better data, you can overwrite the default value.",
        fields: [
          { label: "Type of co-product", value: "straw" },
          { label: "Value relative to crop", value: "20%" }
        ]
      },
      {
        name: "1.3 Co-products",
        fields: [
          { label: "Assessment Name", value: "" },
          { label: "Crop name", value: "wheat" },
          { label: "Harvest year", value: "2018" },
          { label: "Crop Area", value: "200" },
          { label: "Net Yield", value: "" }
        ]
      }
    ],
    soil: [
      {
        name: "2 Field information",
        fields: [
          { label: "Soil Texture", value: "" },
          { label: "Soil organic matter", value: "" },
          { label: "Soil organic carbon", value: "" },
          { label: "Soil moisture average", value: "" },
          { label: "Soil drainage", value: "" },
          { label: "Soil PH", value: "" }
        ]
      }
    ]
  };

  public ngOnInit(): void {}

  public open(): void {
    console.log("set open");
    this._open = !this._open;
    console.log("it's ", open);
  }

  submitted: boolean = false;

  public doFinish(): void {
    console.log("do finish");
    this.submitted = true;
  }

  public makeClaim(): void {
    console.log("making claim to blockchain");
    fetch(
      "http://ec2-35-156-84-202.eu-central-1.compute.amazonaws.com/adapter",
      {
        credentials: "include",
        headers: {
          accept: "*/*",
          authorization: "Bearer cac450bc-8d98-4633-8522-3dd1467c11b2",
          "content-type": "application/json",
          pragma: "no-cache"
        },
        body:
          '{"function": "getClaim", "params": { "productURN": "One must be fond of people and trus" }}',
        method: "POST"
      }
    ).then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }
}
