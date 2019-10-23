import { Component, OnInit } from "@angular/core";
import { WikiService } from "../wiki.service";
import { FormBuilder } from "@angular/forms";
import { WikiResult } from "../model";

@Component({
  selector: "app-input-frame",
  templateUrl: "./input-frame.component.html",
  styleUrls: ["./input-frame.component.css"]
})
export class InputFrameComponent implements OnInit {
  checkoutForm;
  
  wikiResults: WikiResult[];

  constructor(
    private wikiService: WikiService,
    private formBuilder: FormBuilder
  ) 
{
    this.checkoutForm = this.formBuilder.group({ word: "" });
  }

  ngOnInit() {}

  searchFor(text){
    this.wikiService.getWiki(text).subscribe(data => {console.log("response:",data); this.wikiResults=data});
  }
}
