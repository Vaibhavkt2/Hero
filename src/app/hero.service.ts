import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id) !;
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(hero);
  }

  // addHero(hero: Hero): Observable<Hero> {

  //   return this.http.post<hero>(this.heroesURL, hero, this.httpOptions).pipe(
  //     tap((newHero: Hero) => this.log('addes hero w/ id = ${newHero.id'} )),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }

  // deleteHero(id: number): Observable<Hero>{
  //   const url = '${this.heroesURL}/${id}';

  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log('deleted hero id${id}')),
  //     catchError(this.handleError<Hero>('deleteHero'))

  //   );
  // }

  constructor(private messageService: MessageService) { }
}
