import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from '../services/order/order.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Orders } from '../interfaces/order.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  orders: Orders[] = [];
  title: any;
  bgColor: any;

  newOrder: Orders[] = [];
  preparing: Orders[] = [];
  prepared: Orders[] = [];
  delivered: Orders[] = [];

  currentItem: Orders | undefined;

  constructor(private _orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
    this.title = this.orderBoxTitleObjects();
    this.bgColor = this.orderBgcolorObjects();
  }

  loadOrders(): void {
    this._orderService.getOrdersAsync().subscribe({
      next: (res: Orders[]) => {
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

  getOrdersByStatus(status: string): Orders[] {
    return this.orders.filter((order) => order.status === status);
  }

  orderBoxTitleObjects() {
    const titleobjects  = [
      { id: 1, title: 'NEW ORDERS' },
      { id: 2, title: 'PREPARING' },
      { id: 3, title: 'PREPARED' },
      { id: 4, title: 'DELIVERED' },
    ];
    return titleobjects;
  }

  orderBgcolorObjects() {
    const colorObjects = [
      { id: 1, bgColor: 'bg-green-300' },
      { id: 2, bgColor: 'bg-purple-300' },
      { id: 3, bgColor: 'bg-lime-200' },
      { id: 4, bgColor: 'bg-orange-200' },
    ];
    return colorObjects;
  }

  receiveCurrentItem(taskData: Orders) {
    this.currentItem = taskData;
  }

  onDragOver(event: DragEvent) {
    console.log('onDragOver');
    event.preventDefault();
  }

  drop(event: CdkDragDrop<Orders[]>, status: string) {
    const record = this.orders.find((m) => m.id == this.currentItem?.id);
    console.log('currentItem>>',this.currentItem);

    if (record) {
      record.status = status;
      this.updateOrder();
    }

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  updateOrder(): void {
    const records = this.orders.find((m) => m.id == this.currentItem?.id);

    if (records !== undefined) {
      this._orderService.updateOrderAsync(records).subscribe({
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.log(`Update Error occurred: ${error.statusText}-${error.status}`);
          }
        }
      });
    } else {
      console.error('Order not found');
    }
  }
}
