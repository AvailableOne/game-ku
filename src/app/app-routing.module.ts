import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TournamentComponent } from './tournament/tournament.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'leaderboard',component:LeaderboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
