import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { tap, map, subscribeOn } from 'rxjs/operators';
import { WikiResult } from "./model";
import { Observable, from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WikiService {
  wikipediaData;
  wikipediaUrl = "/w/api.php?action=opensearch&search=";

  constructor(private http: HttpClient) {}

  getWiki(text): Observable<WikiResult[]> {
    return this.http.get(this.wikipediaUrl + text)
      .pipe(
        tap(data => console.log("Informacion" + data)),
        map(data => this.transformToWikiResult(data))
      );
  }

  private transformToWikiResult(data): WikiResult[] {
    data[0];
    let wikiResults = [];
    for (let i=0; i<data[1].length && i <3; i++) {
      let wikiResult: WikiResult = {
        'title': data[1][i],
        'snippet': data[2][i],
        'url': data[3][i]
      }
      if (wikiResult.snippet == "") {
        continue;
      }
      wikiResults.push(wikiResult);
    }
    return wikiResults;
  }
}
