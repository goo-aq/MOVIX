import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  id: string | null = '212000';
  movie: any = {};
  recommendations: any[] = [];
  background: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _MoviesService: MoviesService,
  ) {}
  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this._ActivatedRoute.params.subscribe((param) => {
      if(this.id!=param['id']){
      console.log(this.id);
      this.id = param['id'];
      console.log(this.id);}
      this.load();
    });
    this.load();
  }
  load(){
    
    this._MoviesService.getMovieDetails(this.id).subscribe({
      next: (data) => {
        this.movie = data;
        this.background =
          'https://image.tmdb.org/t/p/original/' + this.movie.backdrop_path;
      },
    });
    this._MoviesService.getRecommendations(this.id).subscribe({
      next: (data) => (this.recommendations = data.results),
    });
  }
}
