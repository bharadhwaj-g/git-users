import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}


  getMoviesList() {
    return this.http
      .get(`../assets/data/page1.json`)
      .map(response => response.json());
  }
}
