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
  //Variable con la url de la que se extraeran los datos
  wikipediaUrl = "/w/api.php?action=opensearch&search=";

  constructor(private http: HttpClient) {}

  //Metodo que recibe los caracteres introducidos por el cliente y los devuelve como observable del tipo WikiResult[]
  getWiki(text, cantidad: number = 0): Observable<WikiResult[]> {
    return this.http.get(this.wikipediaUrl + text)
      .pipe(
        tap(data => console.log("Informacion" + data)),
        map(data => this.transformToWikiResult(data, cantidad))
      );
  }

  //Recive la informacion de la API y la almacena en un objeto tipo wikiResults
  private transformToWikiResult(data, cantidad): WikiResult[] {
    data[0];
    let wikiResults = [];
    //Si solo se quiere buscar un resultado asigna a cantidad el valor neceasrio para hacer una iteracion
    if(cantidad == 0){
      cantidad = data[1].length;
    }
    //Recorre toda la informacion recibida en data y la almacena en cada uno de los campos del objeto wikiResult
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
