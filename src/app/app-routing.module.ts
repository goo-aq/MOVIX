import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { ShowComponent } from './show/show.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: homeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'results/:term', component: ResultsComponent },
  { path: '', redirectTo: 'WelcomeComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
