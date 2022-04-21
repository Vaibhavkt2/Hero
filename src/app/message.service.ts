import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[]=[];

  add(message:string){
    this.message.push(message);
  }

  clear(){
    this.message= [];
  }

  constructor() { }
}
