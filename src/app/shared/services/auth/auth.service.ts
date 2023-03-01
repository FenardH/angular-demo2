import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isConnected : boolean = false;

  constructor() { }

  connect(){
    this.isConnected = true
  }

  disconnect(){
    this.isConnected = false;
  }

  get isConnect() : boolean{
    return this.isConnected
  }
}
