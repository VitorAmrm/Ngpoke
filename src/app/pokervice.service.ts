import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pokemon} from './_models/Pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokerviceService {
  private url = 'https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json';
  constructor(private http: HttpClient) {

  }

  listar(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`${this.url}`);

  }

}
