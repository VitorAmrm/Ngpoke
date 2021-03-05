import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pageable} from './_models/Pageable'
import {Pokedto} from './_models/Pokedto'
import { Observable, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokerviceService {
  private url = "https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json";
  public offset = 1
  constructor(private http: HttpClient) {
    
  }

  r
  listar(){
    return this.http.get<Array<any>>(`${this.url}`).toPromise()  
    //const pokearr = [response[this.randNumforPoke()],response[this.randNumforPoke()]]
    
  }
 
}
