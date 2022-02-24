import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContainerComponent } from './_container/container/container.component';
import { HomeComponent } from './_view/home/home.component';
import { LoginComponent } from './_page/login/login.component';
import { CommodityComponent } from './_view/commodity/commodity.component';
import { ContactComponent } from './_view/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'commodity',
        component: CommodityComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  // scrollPositionRestoration : scroll to top
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
