import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Swiper from 'swiper';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"newUser",component:NewUserComponent},
  {path:"About",component:AboutComponent},
  {path:"",component:AboutComponent},


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
 
],
  exports: [RouterModule]
})

@Injectable()
export class AppRoutingModule { }
