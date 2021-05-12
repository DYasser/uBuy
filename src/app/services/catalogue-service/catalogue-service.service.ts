import { Injectable } from '@angular/core';
import { ApiService } from "../api-service/api.service";
import { Apis } from "../API";

@Injectable({
  providedIn: 'root'
})
export class CatalogueServiceService {

  constructor(
    private apiService: ApiService
  ) { }

  getAllBooks() {
    return this.apiService.get(`${Apis.catalogue.getAll}`)
  }
}
