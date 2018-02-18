import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
// import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  //heroes: Hero[] = [];
  data:any;
  dtOptions: DataTables.Settings = {};
  //constructor(private heroService: HeroService) { }
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.getHeroes();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getHeroes(): void {
    this.dashboardService.getHeroes()
      .subscribe(heroes => this.data= heroes);
  }
}
