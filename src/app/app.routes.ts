import { MoviesComponent } from './movies/movies.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '', component: MoviesComponent },
  { path: '**', redirectTo: 'movies' }
];
export const routing = RouterModule.forRoot(routes);
