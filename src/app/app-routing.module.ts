import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AgentsComponent } from './components/hq/agents/agents.component';
import { HeadQuarterComponent } from './components/hq/head-quarter.component';
import { TeamsComponent } from './components/hq/teams/teams.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'headquarter',
    component: HeadQuarterComponent
  },
  {
    path: 'agents',
    component: AgentsComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
