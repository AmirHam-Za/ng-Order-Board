import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_ENDPOINT = 'http://localhost:3000'

  constructor(private _http: HttpClient) {}

  getOrdersAsync(): Observable<any[]> {

    return this._http.get<any[]>(`${this.API_ENDPOINT}/orders`);
  }

}
