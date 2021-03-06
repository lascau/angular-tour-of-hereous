import { Component, OnInit } from '@angular/core';
import {Hero} from '@models/hero';
import {HEROES} from '@models/mock-heroes';
import {HeroService} from '@services/hero.service' 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero
  heroes: Hero[]

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes()
  }

}
