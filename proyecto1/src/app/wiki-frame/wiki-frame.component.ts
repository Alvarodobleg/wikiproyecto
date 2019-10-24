import { Component, OnInit, Input } from "@angular/core";
import { WikiService } from "../wiki.service";
import { WikiResult } from "../model";
//import { InputFrameComponent } from "src/app/input-frame/input-frame.component"

@Component({
  selector: "app-wiki-frame",
  templateUrl: "./wiki-frame.component.html",
  styleUrls: ["./wiki-frame.component.css"]
})
export class WikiFrameComponent implements OnInit {

  @Input() wikiResults: WikiResult[];

  constructor(
    private wikiService: WikiService
    //private wikiService: InputFrameComponent,
    ) {}

  ngOnInit() {
  }
}
