import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }

  getPikachu(){
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu")
  }


}
