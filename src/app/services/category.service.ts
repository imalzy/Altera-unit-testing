import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiURL = 'https://alta-shop.herokuapp.com/api';
  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${this.apiURL}/categories`)
  }
}

export interface ICategory {
  ID: number;
  Name: string;
  Description: string;
}
