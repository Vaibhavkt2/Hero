import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


import { HeroService }  from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

 selectedHero? :Hero;
 heroes: Hero[]=[];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
    this.messageService.add('HeroesComponent: selected hero id=${hero.id}');
  }

  getHeroes():void{
    //this.heroes=this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes) 
  }
}
