import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AdviewComponent} from './adview/adview.component';


const routes: Routes = [{
  path: '',pathMatch: 'full', component: HomeComponent},
  { path: 'add', component: AdviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
