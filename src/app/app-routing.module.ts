import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: "artists", component:ArtistsListComponent},
  {path:  "user-profile", component:UserProfileComponent},
  {path: "", redirectTo:"/user-profile",pathMatch:"full"},
  {path: "user", redirectTo:"/user-profile",pathMatch:"full"},
  {path:"new-user", component: ArtistFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
