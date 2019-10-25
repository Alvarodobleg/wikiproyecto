import { Component, OnInit } from "@angular/core";
import { WikiService } from "../wiki.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-input-frame",
  templateUrl: "./input-frame.component.html",
  styleUrls: ["./input-frame.component.css"]
})
export class InputFrameComponent implements OnInit {
  checkoutForm;
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => {
       this.showSpinner = false;
     }, 300 );
  }

  constructor(
    private wikiService: WikiService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({ word: "" });
  }

  ngOnInit() {}

  searchFor(text){
    this.wikiService.searchFor(text);
    this.checkoutForm = this.formBuilder.group({ word: "" });
  }
}
