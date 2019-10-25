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
  //Variable de la clase WikiResult que almacena los datos extraidos de la API tal y como necesitamos
  wikiResults: WikiResult[];
  showSpinner= false;

  //Constructor de los objetos necesarios  
  constructor(
    private wikiService: WikiService,
    private formBuilder: FormBuilder
  ) 
{
    this.checkoutForm = this.formBuilder.group({ word: "" });
  }

  ngOnInit() {}

  //Funcion que recibe la combinacion de caracteres  introducida por el  usuario
  searchFor(text, cantidad){
    //Si no se introduce nada la funcion no hara nada
    if(text==""){}
    else{
      //Cuando se introducen caracteres se muestra un spinner para indicar al usuario que se esta realizando un proceso
      this.showSpinner=true;
      //Obtiene el observable con la informacion que da la API, la almacena en la variable wikiResults y elimina el spinner
      this.wikiService.getWiki(text,cantidad).subscribe(data => {console.log("response:",data); this.wikiResults=data; this.showSpinner=false;});
    }
  }
}
