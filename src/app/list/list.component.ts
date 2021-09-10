import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PokerviceService} from '../pokervice.service';
import {Pokemon} from '../_models/Pokemon';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  pokemons: Observable<Pokemon[]>;
  discover: boolean;
  aux: Observable<Pokemon[]>;

  constructor(private pokervice: PokerviceService ) { }

  ngOnInit(): void {
    this.discover = false;
    this.aux = this.pokervice.listar() ;
  }
  sort(): void{
    this.pokemons = this.aux
      .pipe( map ( (vl) => [vl[this.randIntFromInterval(0, vl.length)], vl[this.randIntFromInterval(0, vl.length)]] ));
    this.discover = false;
  }
  randIntFromInterval(min, max): number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  mostrar(): void{
    this.discover = true;
  }
  ngAfterViewInit(): void {
    this.sort();
  }

}
