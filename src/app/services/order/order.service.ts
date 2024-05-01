import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINT } from '@constant/order-type';
import { Orders } from '@interfaces/order.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) {}

  getOrdersAsync(): Observable<any[]> {
    return this._http.get<any[]>(`${API_ENDPOINT}/orders`);
  }

  updateOrderAsync(task: any): Observable<any> {

    return this._http.put<any>(`${API_ENDPOINT}/orders/${task.id}`, task);
  }

  private generateOrderUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private generateOrderUniqueGuid(): string {
    return Math.random().toString(36).substr(2, 4);
  }

  private generateOrderUniqueOrderNo(): number {
    return Math.floor(Math.random() * (300 - 100 + 1)) + 100;
  }

  addOrderAsync(order: Orders): Observable<Orders> {
    order.id = this.generateOrderUniqueId()
    order.guid = this.generateOrderUniqueGuid()
    order.order_no = this.generateOrderUniqueOrderNo()

    return this._http.post<Orders>(`${API_ENDPOINT}/orders`, order);
  }


}
