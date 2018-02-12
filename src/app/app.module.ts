import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { LoaderComponent } from './loader/loader.component';
import { routing } from './app.routes';

// Services
import { ApiService } from './api.service';
import { NotificationsService } from 'angular2-notifications';

// External packages.
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule,
    routing
  ],
  providers: [ApiService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
