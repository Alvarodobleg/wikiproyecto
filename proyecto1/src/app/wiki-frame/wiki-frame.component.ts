import { Component, OnInit } from "@angular/core";
import { WikiService } from "../wiki.service";

@Component({
  selector: "app-wiki-frame",
  templateUrl: "./wiki-frame.component.html",
  styleUrls: ["./wiki-frame.component.css"]
})
export class WikiFrameComponent implements OnInit {

  constructor(private wikiService: WikiService) {}

  ngOnInit() {
  }
}
