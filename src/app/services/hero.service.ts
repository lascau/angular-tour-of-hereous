import { Injectable } from '@angular/core';
import { Hero } from '@models/hero'
import { HEROES } from '@models/mock-heroes'
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Hero[] {
    this.messagesService.add('HeroService: fetched heroes')
    return HEROES;
  }

  getHero(id: number): Hero {
    this.messagesService.add(`HeroService: fetched hero id=${id}`)
    return HEROES.find(hero => hero.id == id);
  }
}
