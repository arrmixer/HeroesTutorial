/**
 * Created by Angel on 7/13/17.
 */
import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-dashboard',
  styleUrls: ['./dashboard.component.css'],
  template: '<h3>My Dashboard</h3>',
  templateUrl: './dashboard.component.html',
})

export class DashBoardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
