import { Component, OnInit } from '@angular/core';
import {PokerviceService} from '../pokervice.service';
import {first} from 'rxjs/operators';
import {Pokedto} from '../_models/Pokedto'
import {Pokemon} from '../_models/Pokemon'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons :Array<Pokemon>;
  discover: boolean;
  aux: Array<any>;

  constructor(private pokervice: PokerviceService ) { }

  ngOnInit(): void {
    this.discover = false
    this.pokervice.listar().then(response => {this.aux = response; console.log(response)});
  }
  sort(){
    this.pokemons = [this.aux[this.randNumforPoke()],this.aux[this.randNumforPoke()]]
    this.discover = false
  }
  randIntFromInterval(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
  }
  randNumforPoke(){
    return this.randIntFromInterval(1,898)
  }
  mostrar(){
    this.discover = true
  }

}
