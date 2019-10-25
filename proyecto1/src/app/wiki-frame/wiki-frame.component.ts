import { Component, OnInit, Input } from "@angular/core";
import { WikiService } from "../wiki.service";
import { WikiResult } from "../model";

@Component({
  selector: "app-wiki-frame",
  templateUrl: "./wiki-frame.component.html",
  styleUrls: ["./wiki-frame.component.css"]
})
export class WikiFrameComponent implements OnInit {

  @Input() wikiResults: WikiResult[];

  constructor(
    private wikiService: WikiService
    ) {}

  ngOnInit() {
  }
}
