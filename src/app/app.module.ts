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
import { MoviesComponent } from './movies/movies.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
import { homeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ShowsComponent } from './shows/shows.component';
import { ShowComponent } from './show/show.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';

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
    MoviesComponent,
    WelcomeComponent,
    MovieComponent,
    homeComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ShowsComponent,
    ShowComponent,
    ResultsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
