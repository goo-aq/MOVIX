import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JoinComponent } from './join/join.component';
import { EnjoyComponent } from './enjoy/enjoy.component';
import { DownloadComponent } from './download/download.component';
import { WatchComponent } from './watch/watch.component';
import { KidsComponent } from './kids/kids.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    JoinComponent,
    EnjoyComponent,
    DownloadComponent,
    WatchComponent,
    KidsComponent,
    FaqComponent,
    DashboardComponent,
    MoviesComponent,
    WelcomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
