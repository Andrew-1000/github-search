import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators'


@Injectable()
export class GithubService {

  private uName = 'Andrew-1000';
  private clntSecret = 'c76abfe2e7b769647ecec3a0989ae8a3904068d6';
  private clntId = 'd2117049602a7a0fd7af';
  constructor(private _http:Http) { 

  }
  getUser() {
    return this._http.get('https://api.github.com/users/' + this.uName + '?client_id='
    + this.clntId + '&client_secret=' +this.clntSecret)
    .pipe(map(res=> res.json()));
  }

  getRepo() {
    return this._http.get('https://api.github.com/users/' + this.uName + '/repos?client_id='
    + this.clntId + '&client_secret=' + this.clntSecret)
    .pipe(map(res => res.json()));


  }
  updateUser(uName:string){
    this.uName = uName;
  }
}
