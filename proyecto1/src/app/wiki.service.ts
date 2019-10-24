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

  getWiki(text, cantidad: number = 0): Observable<WikiResult[]> {
    return this.http.get(this.wikipediaUrl + text)
      .pipe(
        tap(data => console.log("Informacion" + data)),
        map(data => this.transformToWikiResult(data, cantidad))
      );
  }

  private transformToWikiResult(data, cantidad): WikiResult[] {
    data[0];
    let wikiResults = [];
    if(cantidad == 0){
      cantidad = data[1].length;
    }
    for (let i=0; i < cantidad; i++) {
      let wikiResult: WikiResult = {
        'title': data[1][i],
        'snippet': data[2][i],
        'url': data[3][i]
      }
      wikiResults.push(wikiResult);
    }
    return wikiResults;
  }
}
