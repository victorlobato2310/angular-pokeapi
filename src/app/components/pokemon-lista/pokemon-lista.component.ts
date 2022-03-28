import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-lista',
  templateUrl: './pokemon-lista.component.html',
  styleUrls: ['./pokemon-lista.component.css']
})
export class PokemonListaComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.getPokemons().subscribe((response: any) => {
      // console.log(response);
      response.results.forEach((result: any) => {
        this.service.getMoreData(result.name)
        .subscribe((response: any) => {
          this.pokemons.push(response);
         console.log(this.pokemons);
        });
      });
    });
  }
}
