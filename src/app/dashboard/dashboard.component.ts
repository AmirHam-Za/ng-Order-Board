import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from '../services/order/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  orders: any[] = [];
  title: any;
  bgColor: any;

  ideas: any[] = [];
  research: any[] = [];
  todo: any[] = [];
  done: any[] = [];



  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
    this.title = this.taskBoxTitleObjects();
    this.bgColor = this.taskBgcolorObjects();
  }

  loadOrders(): void {
    this._orderService.getOrdersAsync().subscribe({
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

  getOrdersByStatus(status: string): any[] {
    return this.orders.filter((order) => order.status === status);
  }

  taskBoxTitleObjects() {
    const titleobjects  = [
      { id: 1, title: 'NEW ORDERS' },
      { id: 2, title: 'PREPARING' },
      { id: 3, title: 'PREPARED' },
      { id: 4, title: 'DELIBERED' },
    ];
    return titleobjects;
  }

  taskBgcolorObjects() {
    const colorObjects = [
      { id: 1, bgColor: 'bg-green-300' },
      { id: 2, bgColor: 'bg-purple-300' },
      { id: 3, bgColor: 'bg-lime-200' },
      { id: 4, bgColor: 'bg-orange-200' },
    ];
    return colorObjects;
  }
}
