import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  term: string | null = '';
  movResults: any[] = [];
  showResults: any[] = [];
  constructor(
    public _ActivatedRoute: ActivatedRoute,
    private _SearchService: SearchService
  ) {}
  ngOnInit() {
    this.term = this._ActivatedRoute.snapshot.paramMap.get('term');
    this._ActivatedRoute.params.subscribe((param) => {
      if (this.term != param['term']) {
        this.term = param['term'];
      }
      this.load();
    });
    this.load();
  }
  load() {
    this._SearchService.searchMovies(this.term).subscribe({
      next: (data) => (this.movResults = data.results),
    });
    this._SearchService.searchShows(this.term).subscribe({
      next: (data) => (this.showResults = data.results),
    });
  }
}
