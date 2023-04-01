import { Component } from '@angular/core';
import { ShowsService } from '../shows.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
})
export class ShowsComponent implements OnInit {
  constructor(private _ShowsService: ShowsService) {}
  trendShowsDay: any[] = [];
  trendShowsWeek: any[] = [];
  popShows: any[] = [];
  topRatedShows: any[] = [];
  isLoadingTD: boolean = false;
  isLoadingTW: boolean = false;
  isLoadingP: boolean = false;
  isLoadingR: boolean = false;
  ngOnInit() {
    this.isLoadingTD = true;
    this.isLoadingTW = true;
    this.isLoadingP = true;
    this.isLoadingR = true;
    this._ShowsService.getTrendingDay().subscribe({
      next: (data) => {
        this.isLoadingTD = false;
        this.trendShowsDay = data.results;
      },    });
    this._ShowsService.getTrendingWeek().subscribe({
      next: (data) => {
        this.isLoadingTW = false;
        this.trendShowsWeek = data.results;
      },    });
    this._ShowsService.getPopular().subscribe({
      next: (data) => {
        this.isLoadingP = false;
        this.popShows = data.results;
      },    });
    this._ShowsService.getPopular().subscribe({
      next: (data) => {
        this.isLoadingR = false;
        this.topRatedShows = data.results;
      },    });
  }
}
