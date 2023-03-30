import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ShowComponent } from './show/show.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: homeComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '', redirectTo: 'WelcomeComponent', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
