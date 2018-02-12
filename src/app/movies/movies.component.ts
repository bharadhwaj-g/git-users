import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../api.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies = [];
  public loading = true;
  public options = {
    position: ['bottom', 'right'],
    timeOut: 5000,
    showProgressBar: false,
    maxStack: 1
  };
  private _sub;
  constructor(
    private _apiService: ApiService,
    private route: ActivatedRoute,
    private _notificationsService: NotificationsService
  ) {}

  ngOnInit() {
   this.getMoviesList();
  }

  // Fetch the user's repos.
  getMoviesList() {
    this.loading = true;
    this._apiService.getMoviesList().subscribe(
      response => {
        this.loading = false;
        this.movies = response.page['content-items'].content;
        this.movies = this.movies.map(movie => {
          movie['imgSrc'] = `../../assets/image/${movie['poster-image']}`;
          return movie;
        });
      },
      error => {
        console.log(error);
        this._notificationsService.error(
          'Some thing went wrong!',
          'Please try again later.'
        );
      }
    );
  }
}
