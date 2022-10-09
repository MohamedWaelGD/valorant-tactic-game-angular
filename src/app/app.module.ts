import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ShopComponent } from './components/shop/shop.component';
import { AgentsShopComponent } from './components/shop/agents-shop/agents-shop.component';
import { WeaponsShopComponent } from './components/shop/weapons-shop/weapons-shop.component';
import { WeaponSkinsShopComponent } from './components/shop/weapon-skins-shop/weapon-skins-shop.component';
import { AgentsComponent } from './components/hq/agents/agents.component';
import { TeamsComponent } from './components/hq/teams/teams.component';
import { HeadQuarterComponent } from './components/hq/head-quarter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WeaponsComponent } from './components/hq/weapons/weapons.component';
import { WeaponSkinsComponent } from './components/hq/weapon-skins/weapon-skins.component';
import { MissionComponent } from './components/mission/mission.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpRequestService } from './services/api/http-request.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import { HeaderInterceptor } from './interceptors/header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ShopComponent,
    AgentsShopComponent,
    WeaponsShopComponent,
    WeaponSkinsShopComponent,
    AgentsComponent,
    TeamsComponent,
    HeadQuarterComponent,
    WeaponsComponent,
    WeaponSkinsComponent,
    MissionComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
