import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/shared/models/pokemon';
import { PokeService } from 'src/app/shared/services/poke/poke.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {

  errorMessage! : string;

  monPokemon! : pokemon;

  constructor(private _pokeService : PokeService){}


  ngOnInit(): void {

    this._pokeService.getPikachu().subscribe({
      next : (data) => {

        this.monPokemon = data

        console.log(this.monPokemon);


      },
      error : (err) => {

        switch(err.status){
          case 0 : this.errorMessage = 'Mec vise le serveur plz'
            break;
          case 404 : this.errorMessage = 'Pokemon introuvable'
            break;
        }

        console.log(err);


      }
    })

  }



}
