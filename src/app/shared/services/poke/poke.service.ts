import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }

  getPikachu(){
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu").pipe(
      map((poke) => {
      return {
        ...poke,
        height : poke.height * 10,
        weight : poke.weight / 10
      }
    })
    )
  }

  getPokemonById(id : number) : Observable<pokemon>{
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/" + id)

  }


}
