import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from 'src/app/models/map';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  getMissionsDetails() : any
  {
    let url = env.API_URL + 'Mission/details';

    return this.http.get(url);
  }

  getMission(uuid:string) : Observable<any>
  {
    let url = env.API_URL + 'Mission/' + uuid;

    return this.http.get(url);
  }

  getProfile() : Observable<any>
  {
    let url = env.API_URL + 'Players/Profile';

    return this.http.get(url);
  }

  getAllAgents() : Observable<any>
  {
    let url = env.API_URL + 'Agent/details';

    return this.http.get(url);
  }

  getAgent(uuid:string) : Observable<any>
  {
    let url = env.API_URL + 'Agent/' + uuid;

    return this.http.get(url);
  }

  getAllWeapons() : Observable<any>
  {
    let url = env.API_URL + 'weapon/details';

    return this.http.get(url);
  }

  getWeapon(uuid:string) : Observable<any>
  {
    let url = env.API_URL + 'weapon/' + uuid;

    return this.http.get(url);
  }

  getAllWeaponSkins() : Observable<any>
  {
    let url = env.API_URL + 'WeaponSkins/details';

    return this.http.get(url);
  }

  getWeaponSkin(uuid:string) : Observable<any>
  {
    let url = env.API_URL + 'WeaponSkins/skin/' + uuid;

    return this.http.get(url);
  }

  getPlayerAgents() : Observable<any>
  {
    var url = env.API_URL + 'AgentLoadout/details';

    return this.http.get(url);
  }

  getPlayerTeams() : Observable<any>
  {
    var url = env.API_URL + 'Team';

    return this.http.get(url);
  }
}
