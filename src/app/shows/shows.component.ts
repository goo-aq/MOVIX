import { Component } from '@angular/core';
import { ShowsService } from '../shows.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  constructor(private _ShowsService: ShowsService) {}
  trendShowsDay: any[] = [];
  trendShowsWeek: any[] = [];
  popShows: any[] = [];
  topRatedShows: any[] = [];

  ngOnInit() {
    this._ShowsService.getTrendingDay().subscribe({
      next: (data) => (this.trendShowsDay = data.results),
    });
    this._ShowsService.getTrendingWeek().subscribe({
      next: (data) => (this.trendShowsWeek = data.results),
    });
    this._ShowsService.getPopular().subscribe({
      next: (data) => (this.popShows = data.results),
    });
    this._ShowsService.getPopular().subscribe({
      next: (data) => (this.topRatedShows = data.results),
    });
  }
}
