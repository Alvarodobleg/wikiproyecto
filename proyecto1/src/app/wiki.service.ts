import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class WikiService {
  wikipediaData;
  wikipediaUrl = "/w/api.php?action=opensearch&search=";
  titleArray = [];
  snippetArray = [];
  urlArray = [];

  constructor(private http: HttpClient) {}

  searchFor(text) {
    console.log("Direccion a: " + this.wikipediaUrl + text);
    this.http
      .get(this.wikipediaUrl + text)
      .toPromise()
      .then(data => {
        this.wikipediaData = data;
        console.log(this.wikipediaData);
        this.splitDataToArray();
      });
  }

  splitDataToArray() {
    this.titleArray = this.wikipediaData[1];
    this.snippetArray = this.wikipediaData[2];
    this.urlArray = this.wikipediaData[3];
  }


}
