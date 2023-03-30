import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../shows.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  id: string | null = '212000';
  show: any = {};
  recommendations: any[] = [];
  background: string = '';
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ShowsService: ShowsService,
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
    
    this._ShowsService.getShowDetails(this.id).subscribe({
      next: (data) => {
        this.show = data;
        this.background =
          'https://image.tmdb.org/t/p/original/' + this.show.backdrop_path;
      },
    });
    this._ShowsService.getRecommendations(this.id).subscribe({
      next: (data) => (this.recommendations = data.results),
    });
  }
}
