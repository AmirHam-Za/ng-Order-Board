import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  API_ENDPOINT = 'http://localhost:3000'

  orders: any[] = [];


  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  getOrder(): Observable<any[]> {

    return this._http.get<any[]>(`${this.API_ENDPOINT}/orders`);
  }

  loadOrders(): void {
    this.getOrder().subscribe({
      next: (res: any[]) => {
        this.orders = res;
        console.log(this.orders);
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log(`Error occurred: ${error.statusText}-${error.status}`);
        }
      }
    })
  }
}
