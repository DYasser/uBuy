import { Injectable } from '@angular/core';
import { ApiService } from "../api-service/api.service";
import { Apis } from "../API";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  login(coord) {
    return this.apiService.get(`${Apis.auth.login}`, coord)
  }

  register(body){
    return this.apiService.post(`${Apis.auth.register}`, body)
  }

  pswdReset(body){
    return this.apiService.get(`${Apis.auth.pswd}`, body)
  }
}
