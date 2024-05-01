import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '@constant/order-type';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) {}

  getItemsAsync(): Observable<any[]> {
    return this._http.get<any[]>(`${API_ENDPOINT}/items`);
  }

  getItemDetailsByUUID(id: string): Observable<any> {
    return this._http.get<any>(`${API_ENDPOINT}/items/${id}`);
  }
}
