import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProtectedGuard } from './protected.guard';
import { RegisterComponent } from './register/register.component';
import { ResultsComponent } from './results/results.component';
import { ShowComponent } from './show/show.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home',canActivate:[ProtectedGuard], component: homeComponent },
  { path: 'movie/:id',canActivate:[ProtectedGuard], component: MovieComponent },
  { path: 'show/:id',canActivate:[ProtectedGuard], component: ShowComponent },
  { path: 'results/:term',canActivate:[ProtectedGuard], component: ResultsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
